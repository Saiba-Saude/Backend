const Profissional = require("../models/profissionais");
const NotFoundError = require("../exceptions/NotFoundError");

class ProfissionalService {
    async criar(dados) {
        return await Profissional.create(dados);
    }

    async listar() {
        return await Profissional.findAll({
            attributes: { exclude: ["senha"] }
        });
    }

    async buscarPorId(id) {
        const profissional = await Profissional.findByPk(id);

        if (!profissional) {
            throw new NotFoundError("Profissional não encontrado");
        }

        return profissional;
    }

    async atualizar(id, dados) {
        const profissional = await Profissional.findByPk(id);

        if (!profissional) {
            throw new NotFoundError("Profissional não encontrado");
        }

        await profissional.update(dados);
        return profissional;
    }

    async deletar(id) {
        const profissional = await Profissional.findByPk(id);

        if (!profissional) {
            throw new NotFoundError("Profissional não encontrado");
        }

        await profissional.destroy();
    }
}

module.exports = new ProfissionalService();