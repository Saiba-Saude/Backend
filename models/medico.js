const bcrypt = require("bcrypt");
const db = require("../config/db");

const Medico = db.sequelize.define("medicos", {
    idmedicos: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: db.Sequelize.STRING(80),
        allowNull: false
    },
    sexo: {
        type: db.Sequelize.ENUM("M", "F"),
        allowNull: false
    },
    nascimento: {
        type: db.Sequelize.DATEONLY,
        allowNull: false
    },
    crm: {
        type: db.Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    especializacao: {
        type: db.Sequelize.STRING(80),
        allowNull: false
    },
    senha: {
        type: db.Sequelize.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false,
    hooks: {
        beforeCreate: async (medico) => {
            medico.senha = await bcrypt.hash(medico.senha, 10);
        },
        beforeUpdate: async (medico) => {
            if (medico.changed("senha")) {
                medico.senha = await bcrypt.hash(medico.senha, 10);
            }
        }
    }
});

module.exports = Medico;