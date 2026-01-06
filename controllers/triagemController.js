const triagemService = require("../services/triagemService");

class TriagemController {
    async criar(req, res, next) {
        try {
            const triagem = await triagemService.criar(req.body);
            res.status(201).json(triagem);
        } catch (error) {
            next(error);
        }
    }

    async listar(req, res, next) {
        try {
            const triagens = await triagemService.listar();
            res.json(triagens);
        } catch (error) {
            next(error);
        }
    }

    async buscarPorId(req, res, next) {
        try {
            const triagem = await triagemService.buscarPorId(req.params.id);
            res.json(triagem);
        } catch (error) {
            next(error);
        }
    }

    async atualizar(req, res, next) {
        try {
            const triagem = await triagemService.atualizar(
                req.params.id,
                req.body
            );
            res.json(triagem);
        } catch (error) {
            next(error);
        }
    }

    async deletar(req, res, next) {
        try {
            await triagemService.deletar(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TriagemController();