const bcrypt = require("bcrypt");
const Profissional = require("../models/profissionais");
const Medico = require("../models/medico");
const Paciente = require("../models/paciente");
const { gerarToken } = require("../utils/jwt");
const AppError = require("../exceptions/AppError");
const BadRequestError = require("../exceptions/BadRequestError");

class AuthService {

    async loginProfissional(cpf, senha) {
        try {
            const profissional = await Profissional.scope(null).findOne({
                where: { cpf }
            });

            if (!profissional) {
                throw new BadRequestError("CPF ou senha inválidos");
            }

            const senhaValida = await bcrypt.compare(senha, profissional.senha);

            if (!senhaValida) {
                throw new BadRequestError("CPF ou senha inválidos");
            }

            const dados = profissional.toJSON();
            delete dados.senha;

            const token = gerarToken({
                id: dados.idprofissionais,
                tipo: "PROFISSIONAL"
            });

            return { token };
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao realizar login do profissional", 500);
        }
    }

    async loginMedico(crm, senha) {
        try {
            const medico = await Medico.scope(null).findOne({
                where: { crm }
            });

            if (!medico) {
                throw new BadRequestError("CRM ou senha inválidos");
            }

            const senhaValida = await bcrypt.compare(senha, medico.senha);

            if (!senhaValida) {
                throw new BadRequestError("CRM ou senha inválidos");
            }

            const dados = medico.toJSON();
            delete dados.senha;

            const token = gerarToken({
                id: dados.idmedicos,
                tipo: "MEDICO"
            });

            return { token };
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao realizar login do médico", 500);
        }
    }

    async loginPaciente(cartaosus, senha) {
        try {
            const paciente = await Paciente.findOne({
                where: { cartaosus }
            });

            if (!paciente) {
                throw new BadRequestError("Cartão SUS ou senha inválidos");
            }

            const senhaValida = await bcrypt.compare(senha, paciente.senha);
            

            if (!senhaValida) {
                throw new BadRequestError("Cartão SUS ou senha inválidos");
            }

            const dados = paciente.toJSON();
            delete dados.senha;
            
            const token = gerarToken({
                id: dados.idpacientes,
                tipo: "PACIENTE"
            });

            return { token };
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError("Erro ao realizar login do paciente", 500);
        }
    }
}

module.exports = new AuthService();