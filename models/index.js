const db = require("../config/db");

const Paciente = require("./paciente");
const Medico = require("./medico");
const Profissional = require("./profissional");
const Unidade = require("./unidade");
const Triagem = require("./triagem");
const Agendamento = require("./agendamento");

/* ============================
   PROFISSIONAL x UNIDADE
============================ */
Profissional.hasMany(Unidade, {
    foreignKey: "profissionais_idprofissionais",
    as: "unidades"
});

Unidade.belongsTo(Profissional, {
    foreignKey: "profissionais_idprofissionais",
    as: "profissional"
});

/* ============================
   MÉDICO x UNIDADE
============================ */
Medico.hasMany(Unidade, {
    foreignKey: "medicos_idmedicos",
    as: "unidades"
});

Unidade.belongsTo(Medico, {
    foreignKey: "medicos_idmedicos",
    as: "medico"
});

/* ============================
   PACIENTE x AGENDAMENTO
============================ */
Paciente.hasMany(Agendamento, {
    foreignKey: "pacientes_idpacientes",
    as: "agendamentos"
});

Agendamento.belongsTo(Paciente, {
    foreignKey: "pacientes_idpacientes",
    as: "paciente"
});

/* ============================
   TRIAGEM x AGENDAMENTO
============================ */
Triagem.hasMany(Agendamento, {
    foreignKey: "triagem_idtriagem",
    as: "agendamentos"
});

Agendamento.belongsTo(Triagem, {
    foreignKey: "triagem_idtriagem",
    as: "triagem"
});

/* ============================
   UNIDADE x AGENDAMENTO
============================ */
Unidade.hasMany(Agendamento, {
    foreignKey: "unidades_idunidades",
    as: "agendamentos"
});

Agendamento.belongsTo(Unidade, {
    foreignKey: "unidades_idunidades",
    as: "unidade"
});

module.exports = {
    db,
    Paciente,
    Medico,
    Profissional,
    Unidade,
    Triagem,
    Agendamento
};