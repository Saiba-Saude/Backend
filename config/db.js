 const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: false
    }
);

module.exports = sequelize;




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

