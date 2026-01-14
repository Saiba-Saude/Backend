const { Op } = require("sequelize");
const Paciente = require("../models/paciente");
const AppError = require("../exceptions/AppError");
const NotFoundError = require("../exceptions/NotFoundError");

class PacienteService {

    async criar(dados) {
        try {
            return await Paciente.create(dados);
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao criar paciente", 500);
        }
    }

    async listar() {
        try {
            return await Paciente.findAll({
                attributes: { exclude: ["senha"] }
            });
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao listar pacientes", 500);
        }
    }

    async buscarPorId(id) {
        try {
            const paciente = await Paciente.findOne({
                where: { idpacientes: id },
                attributes: { exclude: ["senha"] }
            });

            if (!paciente) {
                throw new NotFoundError("Paciente não encontrado");
            }

            return paciente;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao buscar paciente", 500);
        }
    }

    async buscarPorNome(nome) {
        try {
            const pacientes = await Paciente.findAll({
                where: {
                    nome: {
                        [Op.like]: `%${nome}%`
                    }
                },
                attributes: { exclude: ["senha"] }
            });

            if (pacientes.length === 0) {
                throw new NotFoundError("Nenhum paciente encontrado");
            }

            return pacientes;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao buscar pacientes por nome", 500);
        }
    }

    async atualizar(id, dados) {
        try {
            const paciente = await Paciente.findOne({
                where: { idpacientes: id }
            });

            if (!paciente) {
                throw new NotFoundError("Paciente não encontrado");
            }

            await paciente.update(dados);
            return paciente;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao atualizar paciente", 500);
        }
    }

    async deletar(id) {
        try {
            const paciente = await Paciente.findOne({
                where: { idpacientes: id }
            });

            if (!paciente) {
                throw new NotFoundError("Paciente não encontrado");
            }

            await paciente.destroy();
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao deletar paciente", 500);
        }
    }
}

module.exports = new PacienteService();