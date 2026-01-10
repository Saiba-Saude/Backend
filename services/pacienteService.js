const { Op } = require("sequelize");
const Paciente = require("../models/paciente");
const NotFoundError = require("../exceptions/NotFoundError");

class PacienteService {
    async criar(dados) {
        return await Paciente.create(dados);
    }

    async listar() {
        return await Paciente.findAll({
            attributes: { exclude: ["senha"] }
        });
    }

    async buscarPorId(id) {
        const paciente = await Paciente.findByPk(id, {
            attributes: { exclude: ["senha"] }
        });

        if (!paciente) {
            throw new NotFoundError("Paciente não encontrado");
        }

        return paciente;
    }

    async buscarPorNome(nome) {
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
    }

    async atualizar(id, dados) {
        const paciente = await Paciente.findByPk(id);

        if (!paciente) {
            throw new NotFoundError("Paciente não encontrado");
        }

        await paciente.update(dados);
        return paciente;
    }

    async deletar(id) {
        const paciente = await Paciente.findByPk(id);

        if (!paciente) {
            throw new NotFoundError("Paciente não encontrado");
        }

        await paciente.destroy();
    }
}

module.exports = new PacienteService();