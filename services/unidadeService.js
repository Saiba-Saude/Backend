const Unidade = require("../models/unidade");
const Medico = require("../models/medico");
const Profissional = require("../models/profissionais");
const NotFoundError = require("../exceptions/NotFoundError");

class UnidadeService {
    async criar(dados) {
        return await Unidade.create(dados);
    }

    async listar() {
        return await Unidade.findAll({
            include: [
                { model: Medico },
                { model: Profissional }
            ]
        });
    }

    async buscarPorId(id) {
        const unidade = await Unidade.findByPk(id, {
            include: [
                { model: Medico },
                { model: Profissional }
            ]
        });

        if (!unidade) {
            throw new NotFoundError("Unidade não encontrada");
        }

        return unidade;
    }

    async atualizar(id, dados) {
        const unidade = await Unidade.findByPk(id);

        if (!unidade) {
            throw new NotFoundError("Unidade não encontrada");
        }

        await unidade.update(dados);
        return unidade;
    }

    async deletar(id) {
        const unidade = await Unidade.findByPk(id);

        if (!unidade) {
            throw new NotFoundError("Unidade não encontrada");
        }

        await unidade.destroy();
    }
}

module.exports = new UnidadeService();