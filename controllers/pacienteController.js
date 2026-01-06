const pacienteService = require("../services/pacienteService");

class PacienteController {
    async criar(req, res, next) {
        try {
            const paciente = await pacienteService.criar(req.body);
            res.status(201).json(paciente);
        } catch (error) {
            next(error);
        }
    }

    async listar(req, res, next) {
        try {
            const pacientes = await pacienteService.listar();
            res.json(pacientes);
        } catch (error) {
            next(error);
        }
    }

    async buscarPorId(req, res, next) {
        try {
            const paciente = await pacienteService.buscarPorId(req.params.id);
            res.json(paciente);
        } catch (error) {
            next(error);
        }
    }

    async buscarPorNome(req, res, next) {
        try {
            const { nome } = req.params;
            const pacientes = await pacienteService.buscarPorNome(nome);
            res.json(pacientes);
        } catch (error) {
            next(error);
        }
    }

    async atualizar(req, res, next) {
        try {
            const paciente = await pacienteService.atualizar(
                req.params.id,
                req.body
            );
            res.json(paciente);
        } catch (error) {
            next(error);
        }
    }

    async deletar(req, res, next) {
        try {
            await pacienteService.deletar(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PacienteController();