const Agendamento = require("../models/agendamento");
const Paciente = require("../models/paciente");
const Triagem = require("../models/triagem");
const Unidade = require("../models/unidade");
const AppError = require("../exceptions/AppError");
const NotFoundError = require("../exceptions/NotFoundError");

class AgendamentoService {

    async criar(dados) {
        try {
            const paciente = await Paciente.findOne({
                where: { idpacientes: dados.pacientes_idpacientes }
            });
            if (!paciente) throw new NotFoundError("Paciente não encontrado");

            const triagem = await Triagem.findOne({
                where: { idtriagem: dados.triagem_idtriagem }
            });
            if (!triagem) throw new NotFoundError("Triagem não encontrada");

            const unidade = await Unidade.findOne({
                where: { idunidades: dados.unidades_idunidades }
            });
            if (!unidade) throw new NotFoundError("Unidade não encontrada");

            return await Agendamento.create(dados);
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao criar agendamento", 500);
        }
    }

    async listar() {
        try {
            return await Agendamento.findAll({
                include: [Paciente, Triagem, Unidade]
            });
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao listar agendamentos", 500);
        }
    }

    async buscarPorId(id) {
        try {
            const agendamento = await Agendamento.findOne({
                where: { idagendamentos: id },
                include: [Paciente, Triagem, Unidade]
            });

            if (!agendamento) {
                throw new NotFoundError("Agendamento não encontrado");
            }

            return agendamento;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao buscar agendamento", 500);
        }
    }

    async atualizar(id, dados) {
        try {
            const agendamento = await Agendamento.findOne({
                where: { idagendamentos: id }
            });

            if (!agendamento) {
                throw new NotFoundError("Agendamento não encontrado");
            }

            await agendamento.update(dados);
            return agendamento;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao atualizar agendamento", 500);
        }
    }

    async deletar(id) {
        try {
            const agendamento = await Agendamento.findOne({
                where: { idagendamentos: id }
            });

            if (!agendamento) {
                throw new NotFoundError("Agendamento não encontrado");
            }

            await agendamento.destroy();
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao deletar agendamento", 500);
        }
    }
}

module.exports = new AgendamentoService();