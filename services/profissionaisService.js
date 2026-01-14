const Profissional = require("../models/profissionais");
const AppError = require("../exceptions/AppError");
const NotFoundError = require("../exceptions/NotFoundError");

class ProfissionalService {

    async criar(dados) {
        try {
            return await Profissional.create(dados);
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao criar profissional", 500);
        }
    }

    async listar() {
        try {
            return await Profissional.findAll({
                attributes: { exclude: ["senha"] }
            });
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao listar profissionais", 500);
        }
    }

    async buscarPorId(id) {
        try {
            const profissional = await Profissional.findOne({
                where: { idprofissionais: id },
                attributes: { exclude: ["senha"] }
            });

            if (!profissional) {
                throw new NotFoundError("Profissional não encontrado");
            }

            return profissional;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao buscar profissional", 500);
        }
    }

    async atualizar(id, dados) {
        try {
            const profissional = await Profissional.findOne({
                where: { idprofissionais: id }
            });

            if (!profissional) {
                throw new NotFoundError("Profissional não encontrado");
            }

            await profissional.update(dados);
            return profissional;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao atualizar profissional", 500);
        }
    }

    async deletar(id) {
        try {
            const profissional = await Profissional.findOne({
                where: { idprofissionais: id }
            });

            if (!profissional) {
                throw new NotFoundError("Profissional não encontrado");
            }

            await profissional.destroy();
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao deletar profissional", 500);
        }
    }
}

module.exports = new ProfissionalService();