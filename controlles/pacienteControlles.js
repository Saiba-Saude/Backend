const Paciente = require("../models/paciente");

exports.criar = (req, res) => {
    Paciente.create(req.body)
        .then(() => res.send("Cadastrado com Sucesso!"))
        .catch(err => res.send("Erro ao Cadastrar o Paciente! " + err));
};

exports.listar = (req, res) => {
    Paciente.findAll()
        .then(pacientes => res.send(pacientes))
        .catch(err => res.send("Erro ao buscar os dados " + err));
};

exports.atualizar = (req, res) => {
    Paciente.update(req.body, { where: { id: req.params.id } })
        .then(() => res.send("Sucesso ao Atualizar os Dados do Paciente!"))
        .catch(err => res.send("Erro ao Atualizar os Dados do Paciente " + err));
};

exports.deletar = (req, res) => {
    Paciente.destroy({ where: { id: req.params.id } })
        .then(() => res.send("Cadastro do Paciente Deletado com sucesso!"))
        .catch(err => res.send("Erro ao Deletar o Paciente! " + err));
};

exports.buscarPorNome = (req, res) => {
    Paciente.findAll({ where: { nome: req.params.nome } })
        .then(pacientes => res.send(pacientes))
        .catch(err => res.send("Erro ao Consultar o Paciente " + err));
};