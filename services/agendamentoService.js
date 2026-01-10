const Agendamento = require("../models/agendamento");
const Paciente = require("../models/paciente");
const Triagem = require("../models/triagem");
const Unidade = require("../models/unidade");
const NotFoundError = require("../exceptions/NotFoundError");

class AgendamentoService {
    async criar(dados) {
        const paciente = await Paciente.findByPk(dados.pacientes_idpacientes);
        if (!paciente) throw new NotFoundError("Paciente não encontrado");

        const triagem = await Triagem.findByPk(dados.triagem_idtriagem);
        if (!triagem) throw new NotFoundError("Triagem não encontrada");

        const unidade = await Unidade.findByPk(dados.unidades_idunidades);
        if (!unidade) throw new NotFoundError("Unidade não encontrada");

        return await Agendamento.create(dados);
    }

    async listar() {
        return await Agendamento.findAll({
            include: [Paciente, Triagem, Unidade]
        });
    }

    async buscarPorId(id) {
        const agendamento = await Agendamento.findByPk(id, {
            include: [Paciente, Triagem, Unidade]
        });

        if (!agendamento) {
            throw new NotFoundError("Agendamento não encontrado");
        }

        return agendamento;
    }

    async atualizar(id, dados) {
        const agendamento = await Agendamento.findByPk(id);
        if (!agendamento) {
            throw new NotFoundError("Agendamento não encontrado");
        }

        await agendamento.update(dados);
        return agendamento;
    }

    async deletar(id) {
        const agendamento = await Agendamento.findByPk(id);
        if (!agendamento) {
            throw new NotFoundError("Agendamento não encontrado");
        }

        await agendamento.destroy();
    }
}

module.exports = new AgendamentoService();