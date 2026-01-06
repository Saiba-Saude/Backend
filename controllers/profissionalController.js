const profissionalService = require("../services/profissionalService");

class ProfissionalController {
    async criar(req, res) {
        try {
            const profissional = await profissionalService.criar(req.body);
            return res.status(201).json(profissional);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async listar(req, res) {
        try {
            const profissionais = await profissionalService.listar();
            return res.json(profissionais);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const profissional = await profissionalService.buscarPorId(req.params.id);

            if (!profissional) {
                return res.status(404).json({ mensagem: "Profissional não encontrado" });
            }

            return res.json(profissional);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const profissional = await profissionalService.atualizar(
                req.params.id,
                req.body
            );

            if (!profissional) {
                return res.status(404).json({ mensagem: "Profissional não encontrado" });
            }

            return res.json(profissional);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async deletar(req, res) {
        try {
            const removido = await profissionalService.deletar(req.params.id);

            if (!removido) {
                return res.status(404).json({ mensagem: "Profissional não encontrado" });
            }

            return res.json({ mensagem: "Profissional removido com sucesso" });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }
}

module.exports = new ProfissionalController();