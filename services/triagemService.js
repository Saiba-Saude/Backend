const Triagem = require("../models/triagem");
const AppError = require("../exceptions/AppError");
const NotFoundError = require("../exceptions/NotFoundError");

class TriagemService {

    async criar(dados) {
        try {
            return await Triagem.create(dados);
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao criar triagem", 500);
        }
    }

    async listar() {
        try {
            return await Triagem.findAll();
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao listar triagens", 500);
        }
    }

    async buscarPorId(id) {
        try {
            const triagem = await Triagem.findOne({
                where: { idtriagem: id }
            });

            if (!triagem) {
                throw new NotFoundError("Triagem não encontrada");
            }

            return triagem;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao buscar triagem", 500);
        }
    }

    async atualizar(id, dados) {
        try {
            const triagem = await Triagem.findOne({
                where: { idtriagem: id }
            });

            if (!triagem) {
                throw new NotFoundError("Triagem não encontrada");
            }

            await triagem.update(dados);
            return triagem;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao atualizar triagem", 500);
        }
    }

    async deletar(id) {
        try {
            const triagem = await Triagem.findOne({
                where: { idtriagem: id }
            });

            if (!triagem) {
                throw new NotFoundError("Triagem não encontrada");
            }

            await triagem.destroy();
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao deletar triagem", 500);
        }
    }
}

module.exports = new TriagemService();