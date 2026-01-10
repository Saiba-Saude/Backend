const bcrypt = require("bcrypt");
const Profissional = require("../models/profissional");
const Medico = require("../models/medico");
const Paciente = require("../models/paciente");
<<<<<<< HEAD
const { gerarToken } = require("../utils/jwt");
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

class AuthService {

    async loginProfissional(cpf, senha) {
        const profissional = await Profissional.scope(null).findOne({
            where: { cpf }
        });

        if (!profissional) {
            throw new Error("CPF ou senha inválidos");
        }

        const senhaValida = await bcrypt.compare(senha, profissional.senha);

        if (!senhaValida) {
            throw new Error("CPF ou senha inválidos");
        }

        const dados = profissional.toJSON();
        delete dados.senha;

<<<<<<< HEAD
        const token = gerarToken({
            id: dados.id,
            tipo: "PROFISSIONAL"
        });

        return {
            token
        };
=======
        return dados;
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
    }

    async loginMedico(crm, senha) {
        const medico = await Medico.scope(null).findOne({
            where: { crm }
        });

        if (!medico) {
            throw new Error("CRM ou senha inválidos");
        }

        const senhaValida = await bcrypt.compare(senha, medico.senha);

        if (!senhaValida) {
            throw new Error("CRM ou senha inválidos");
        }

        const dados = medico.toJSON();
        delete dados.senha;

<<<<<<< HEAD
        const token = gerarToken({
            id: dados.id,
            tipo: "MEDICO"
        });

        return {
            token
        };
=======
        return dados;
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
    }

    async loginPaciente(cartaosus, senha) {
        const paciente = await Paciente.scope(null).findOne({
            where: { cartaosus }
        });

        if (!paciente) {
            throw new Error("Cartão SUS ou senha inválidos");
        }

        const senhaValida = await bcrypt.compare(senha, paciente.senha);

        if (!senhaValida) {
            throw new Error("Cartão SUS ou senha inválidos");
        }

        const dados = paciente.toJSON();
        delete dados.senha;

<<<<<<< HEAD
        const token = gerarToken({
            id: dados.id,
            tipo: "PACIENTE"
        });

        return {
            token
        };
=======
        return dados;
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
    }
}

module.exports = new AuthService();