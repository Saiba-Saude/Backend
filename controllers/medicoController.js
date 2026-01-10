const medicoService = require("../services/medicoService");

class MedicoController {
    async criar(req, res, next) {
        try {
            const medico = await medicoService.criar(req.body);
            res.status(201).json(medico);
        } catch (error) {
            next(error);
        }
    }

    async listar(req, res, next) {
        try {
            const medicos = await medicoService.listar();
            res.json(medicos);
        } catch (error) {
            next(error);
        }
    }

    async buscarPorId(req, res, next) {
        try {
            const medico = await medicoService.buscarPorId(req.params.id);
            res.json(medico);
        } catch (error) {
            next(error);
        }
    }

    async atualizar(req, res, next) {
        try {
            const medico = await medicoService.atualizar(
                req.params.id,
                req.body
            );
            res.json(medico);
        } catch (error) {
            next(error);
        }
    }

    async deletar(req, res, next) {
        try {
            await medicoService.deletar(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new MedicoController();