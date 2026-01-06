const AuthService = require("../services/authService");

class AuthController {

    async loginProfissional(req, res) {
        try {
            const { cpf, senha } = req.body;
            const profissional = await AuthService.loginProfissional(cpf, senha);
            return res.json(profissional);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }

    async loginMedico(req, res) {
        try {
            const { crm, senha } = req.body;
            const medico = await AuthService.loginMedico(crm, senha);
            return res.json(medico);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }

    async loginPaciente(req, res) {
        try {
            const { cartaosus, senha } = req.body;
            const paciente = await AuthService.loginPaciente(cartaosus, senha);
            return res.json(paciente);
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();