const db = require("../config/db");

const Unidade = db.sequelize.define("unidade", {
    idunidades: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    },
    funcionamento: {
        type: db.Sequelize.STRING(45)
    },
    rua: {
        type: db.Sequelize.STRING(45)
    },
    municipio: {
        type: db.Sequelize.STRING(45)
    },
    medicos_idmedicos: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    profissionais_idprofissionais: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Unidade;