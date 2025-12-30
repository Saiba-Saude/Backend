const db = require("../config/db");

const Paciente = db.sequelize.define("paciente", {

    cartaosus: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    nascimento: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone: {
       type: db.Sequelize.STRING,
       allowNull: false 
    },

});

Paciente.sync({force: false});

//Exportando para poder usar na Rota//

module.exports = Paciente;