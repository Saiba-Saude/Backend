const Medico = require("../models/medico");
const AppError = require("../exceptions/AppError");
const NotFoundError = require("../exceptions/NotFoundError");

class MedicoService {
    async criar(dados) {
        try {
            return await Medico.create(dados);
        } catch (error) {
            console.log(error);
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao criar médico", 500);
        }
    }

    async listar() {
        try {
            return await Medico.findAll({
                attributes: { exclude: ["senha"] }
            });
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao listar médicos", 500);
        }
    }

    async buscarPorId(id) {
        try {
            const medico = await Medico.findByPk(id);

            if (!medico) {
                throw new NotFoundError("Médico não encontrado");
            }

            return medico;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao buscar médico", 500);
        }
    }

    async atualizar(id, dados) {
        try {
            const medico = await Medico.findByPk({
                where: { idmedicos: id }
            });

            if (!medico) {
                throw new NotFoundError("Médico não encontrado");
            }

            await medico.update(dados);
            return medico;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao atualizar médico", 500);
        }
    }

    async deletar(id) {
        try {
            const medico = await Medico.findByPk({
                where: { idmedicos: id }
            });

            if (!medico) {
                throw new NotFoundError("Médico não encontrado");
            }

            await medico.destroy();
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao deletar médico", 500);
        }
    }
}

module.exports = new MedicoService();