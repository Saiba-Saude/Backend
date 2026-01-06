const bcrypt = require("bcrypt");
const db = require("../config/db");

const Profissional = db.sequelize.define("profissional", {
    idprofissionais: {
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
        type: db.Sequelize.DATE,
        allowNull: false
    },
    cpf: {
        type: db.Sequelize.BIGINT,
        allowNull: false
    },
    rg: {
        type: db.Sequelize.BIGINT,
        allowNull: false
    },
    telefone: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    },
    senha: {
        type: db.Sequelize.STRING(255),
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: async (profissional) => {
            profissional.senha = await bcrypt.hash(profissional.senha, 10);
        },
        beforeUpdate: async (profissional) => {
            if (profissional.changed("senha")) {
                profissional.senha = await bcrypt.hash(profissional.senha, 10);
            }
        }
    }
});

module.exports = Profissional;