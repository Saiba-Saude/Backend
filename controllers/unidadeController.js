const unidadeService = require("../services/unidadeService");

class UnidadeController {
    async criar(req, res, next) {
        try {
            const unidade = await unidadeService.criar(req.body);
            res.status(201).json(unidade);
        } catch (error) {
            next(error);
        }
    }

    async listar(req, res, next) {
        try {
            const unidades = await unidadeService.listar();
            res.json(unidades);
        } catch (error) {
            next(error);
        }
    }

    async buscarPorId(req, res, next) {
        try {
            const unidade = await unidadeService.buscarPorId(req.params.id);
            res.json(unidade);
        } catch (error) {
            next(error);
        }
    }

    async atualizar(req, res, next) {
        try {
            const unidade = await unidadeService.atualizar(
                req.params.id,
                req.body
            );
            res.json(unidade);
        } catch (error) {
            next(error);
        }
    }

    async deletar(req, res, next) {
        try {
            await unidadeService.deletar(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UnidadeController();