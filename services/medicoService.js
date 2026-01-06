const Medico = require("../models/medico");
const NotFoundError = require("../exceptions/NotFoundError");

class MedicoService {
    async criar(dados) {
        return await Medico.create(dados);
    }

    async listar() {
        return await Medico.findAll({
            attributes: { exclude: ["senha"] }
        });
    }

    async buscarPorId(id) {
        const medico = await Medico.findByPk(id);

        if (!medico) {
            throw new NotFoundError("Médico não encontrado");
        }

        return medico;
    }

    async atualizar(id, dados) {
        const medico = await Medico.findByPk(id);

        if (!medico) {
            throw new NotFoundError("Médico não encontrado");
        }

        await medico.update(dados);
        return medico;
    }

    async deletar(id) {
        const medico = await Medico.findByPk(id);

        if (!medico) {
            throw new NotFoundError("Médico não encontrado");
        }

        await medico.destroy();
    }
}

module.exports = new MedicoService();