const express = require('express');
const app = express();
const Paciente = require("./models/paciente");
//Configurar BodyParser//
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//ROTA para criar usuario
app.post("/cadastro", (req, res) =>{
    Paciente.create({
        cartaosus: req.body.cartaosus,
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        telefone: req.body.telefone
    }).then(() =>{
        res.send("Cadastrado com Sucesso!");
    }).catch((erro) =>{
        res.send("Erro ao Cadastrar o Paciente!");
    });
});

//ROTA para Buscar ou Listar Usuarios
app.get("/", (req,res) => {
    Paciente.findAll().then((pacientes) =>{
        res.send(pacientes)
    }).catch((erro) => {
        res.send("Erro ao buscar os dados" + erro);
    });
});

//ROTA para Atualizar os Dados do Paciente//
app.patch("/atualizar/:id", (req, res) =>{
    Paciente.update({
        cartaosus: req.body.cartaosus,
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        telefone: req.body.telefone},
        {where: {"id": req.params.id}}
    ).then( () => {
        res.send("Sucesso ao Atualizar os Dados do Paciente!");
    }).catch( (erro) => {
        res.send("Erro ao Atualizar os Dados do Paciente" + erro);
    })
});
 
//ROTA para Deletar Cadastro do Paciente//
app.delete("/deletar/:id", (req, res) =>{
    Paciente.destroy({where: {"id": req.params.id}}).then(() => {
        res.send("Cadastro do Paciente Deletado com sucesso!");
    }).catch((erro) =>{
        res.send("Erro ao Deletar o Paciente!" + erro);
    })
});

//ROTA para fazer consulta do Paciente//
app.get("/:nome", (req, res) => {
    Paciente.findAll({where: {"nome": req.params.nome}}).then((pacientes) => {
        res.send(pacientes);
        res.send("Consulta Realizada com Sucesso!")
    }).catch((erro) =>{
        res.send("Erro ao Consultar o Paciente" + erro);
    })
})



app.listen(8081, (req, res) => {
    console.log("Servidor está Funcionando!");
});
