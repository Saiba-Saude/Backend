const agendamentoService = require("../services/agendamentoService");

class AgendamentoController {
    async criar(req, res, next) {
        try {
            const agendamento = await agendamentoService.criar(req.body);
            res.status(201).json(agendamento);
        } catch (error) {
            next(error);
        }
    }

    async listar(req, res, next) {
        try {
            const agendamentos = await agendamentoService.listar();
            res.json(agendamentos);
        } catch (error) {
            next(error);
        }
    }

    async buscarPorId(req, res, next) {
        try {
            const agendamento = await agendamentoService.buscarPorId(req.params.id);
            res.json(agendamento);
        } catch (error) {
            next(error);
        }
    }

    async atualizar(req, res, next) {
        try {
            const agendamento = await agendamentoService.atualizar(
                req.params.id,
                req.body
            );
            res.json(agendamento);
        } catch (error) {
            next(error);
        }
    }

    async deletar(req, res, next) {
        try {
            await agendamentoService.deletar(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AgendamentoController();