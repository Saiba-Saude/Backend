const bcrypt = require("bcrypt");
const db = require("../config/db");

const Paciente = db.sequelize.define(
  "paciente",
  {
    idpacientes: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    cartaosus: {
      type: db.Sequelize.STRING(20),
      allowNull: false,
    },

    nome: {
      type: db.Sequelize.STRING(80),
      allowNull: false,
    },

    sexo: {
      type: db.Sequelize.ENUM("Masculino", "Feminino", "Outro"),
      allowNull: false,
    },

    nascimento: {
      type: db.Sequelize.DATEONLY,
      allowNull: false,
    },

    telefone: {
      type: db.Sequelize.STRING(30),
      allowNull: false,
    },

    bairro: {
      type: db.Sequelize.STRING(45),
      allowNull: false,
    },

    municipio: {
      type: db.Sequelize.STRING(45),
      allowNull: false,
    },

    senha: {
      type: db.Sequelize.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "pacientes",
    timestamps: false, // 🔥 REMOVE createdAt e updatedAt

    hooks: {
      beforeCreate: async (paciente) => {
        paciente.senha = await bcrypt.hash(paciente.senha, 10);
      },

      beforeUpdate: async (paciente) => {
        if (paciente.changed("senha")) {
          paciente.senha = await bcrypt.hash(paciente.senha, 10);
        }
      },
    },
  }
);

module.exports = Paciente;
