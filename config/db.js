const { Sequelize } = require("sequelize");


//Usando o Sequelize para conectar ao Banco de Dados "saibamais"
const sequelize = new Sequelize(
    "saibamais",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

//Verificando a Conexão com o Banco de Dados//
sequelize.authenticate().then(( ()=>{
        console.log("Banco de Dados Funcionando com Sucesso!");
})).catch((erro) => {
    console.log("Erro ao se conectar com o banco de dado" + erro);
});


//Comando pra exportar e poder usar o db.js em outros arquivos//
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

