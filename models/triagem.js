const db = require("../config/db");

const Triagem = db.sequelize.define("triagem", {
    idtriagem: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    },
    gravidade: {
        type: db.Sequelize.ENUM("baixa", "media", "alta"),
        allowNull: false
    }
});

module.exports = Triagem;