const Triagem = require("../models/triagem");
const NotFoundError = require("../exceptions/NotFoundError");

class TriagemService {
    async criar(dados) {
        return await Triagem.create(dados);
    }

    async listar() {
        return await Triagem.findAll();
    }

    async buscarPorId(id) {
        const triagem = await Triagem.findByPk(id);

        if (!triagem) {
            throw new NotFoundError("Triagem não encontrada");
        }

        return triagem;
    }

    async atualizar(id, dados) {
        const triagem = await Triagem.findByPk(id);

        if (!triagem) {
            throw new NotFoundError("Triagem não encontrada");
        }

        await triagem.update(dados);
        return triagem;
    }

    async deletar(id) {
        const triagem = await Triagem.findByPk(id);

        if (!triagem) {
            throw new NotFoundError("Triagem não encontrada");
        }

        await triagem.destroy();
    }
}

module.exports = new TriagemService();