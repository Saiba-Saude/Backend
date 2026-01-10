const db = require("../config/db");

const Agendamento = db.sequelize.define("agendamento", {
    idagendamentos: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    descricao: {
        type: db.Sequelize.TEXT
    },
    pacientes_idpacientes: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    triagem_idtriagem: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    unidades_idunidades: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Agendamento;