const Unidade = require("../models/unidade");
const Medico = require("../models/medico");
const Profissional = require("../models/profissionais");
const AppError = require("../exceptions/AppError");
const NotFoundError = require("../exceptions/NotFoundError");

class UnidadeService {

    async criar(dados) {
        try {
            return await Unidade.create(dados);
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao criar unidade", 500);
        }
    }

    async listar() {
        try {
            return await Unidade.findAll({
                include: [
                    { model: Medico },
                    { model: Profissional }
                ]
            });
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao listar unidades", 500);
        }
    }

    async buscarPorId(id) {
        try {
            const unidade = await Unidade.findOne({
                where: { idunidades: id },
                include: [
                    { model: Medico },
                    { model: Profissional }
                ]
            });

            if (!unidade) {
                throw new NotFoundError("Unidade não encontrada");
            }

            return unidade;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao buscar unidade", 500);
        }
    }

    async atualizar(id, dados) {
        try {
            const unidade = await Unidade.findOne({
                where: { idunidades: id }
            });

            if (!unidade) {
                throw new NotFoundError("Unidade não encontrada");
            }

            await unidade.update(dados);
            return unidade;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao atualizar unidade", 500);
        }
    }

    async deletar(id) {
        try {
            const unidade = await Unidade.findOne({
                where: { idunidades: id }
            });

            if (!unidade) {
                throw new NotFoundError("Unidade não encontrada");
            }

            await unidade.destroy();
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao deletar unidade", 500);
        }
    }
}

module.exports = new UnidadeService();