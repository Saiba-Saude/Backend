const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Gestão de Clínica",
            version: "1.0.0",
            description: "Documentação completa da API de pacientes, médicos, profissionais, agendamentos, triagens, unidades e autenticação"
        },
        servers: [
            {
                url: "http://localhost:8081/",
                description: "Servidor Local"
            }
        ],
        components: {
            schemas: {
                // ====== Auth ======
                LoginInput: {
                    type: "object",
                    properties: {
                        email: { type: "string", example: "usuario@email.com" },
                        senha: { type: "string", example: "senha123" }
                    },
                    required: ["email", "senha"]
                },
                LoginResponse: {
                    type: "object",
                    properties: {
                        token: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
                    }
                },

                // ====== Paciente ======
                Paciente: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        email: { type: "string" },
                        telefone: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    },
                    required: ["id", "nome", "email"]
                },
                PacienteInput: {
                    type: "object",
                    properties: {
                        nome: { type: "string" },
                        email: { type: "string" },
                        telefone: { type: "string" }
                    },
                    required: ["nome", "email"]
                },

                // ====== Médico ======
                Medico: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        especialidade: { type: "string" },
                        email: { type: "string" },
                        telefone: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    },
                    required: ["id", "nome", "especialidade", "email"]
                },
                MedicoInput: {
                    type: "object",
                    properties: {
                        nome: { type: "string" },
                        especialidade: { type: "string" },
                        email: { type: "string" },
                        telefone: { type: "string" }
                    },
                    required: ["nome", "especialidade", "email"]
                },

                // ====== Profissional ======
                Profissional: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        cargo: { type: "string" },
                        email: { type: "string" },
                        telefone: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    },
                    required: ["id", "nome", "cargo", "email"]
                },
                ProfissionalInput: {
                    type: "object",
                    properties: {
                        nome: { type: "string" },
                        cargo: { type: "string" },
                        email: { type: "string" },
                        telefone: { type: "string" }
                    },
                    required: ["nome", "cargo", "email"]
                },

                // ====== Agendamento ======
                Agendamento: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        pacienteId: { type: "integer" },
                        medicoId: { type: "integer" },
                        data: { type: "string", format: "date-time" },
                        status: { type: "string", enum: ["pendente", "confirmado", "cancelado"] },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    },
                    required: ["id", "pacienteId", "medicoId", "data", "status"]
                },
                AgendamentoInput: {
                    type: "object",
                    properties: {
                        pacienteId: { type: "integer" },
                        medicoId: { type: "integer" },
                        data: { type: "string", format: "date-time" },
                        status: { type: "string", enum: ["pendente", "confirmado", "cancelado"] }
                    },
                    required: ["pacienteId", "medicoId", "data", "status"]
                },

                // ====== Triagem ======
                Triagem: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        pacienteId: { type: "integer" },
                        profissionalId: { type: "integer" },
                        sintomas: { type: "string" },
                        observacoes: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    },
                    required: ["id", "pacienteId", "profissionalId", "sintomas"]
                },
                TriagemInput: {
                    type: "object",
                    properties: {
                        pacienteId: { type: "integer" },
                        profissionalId: { type: "integer" },
                        sintomas: { type: "string" },
                        observacoes: { type: "string" }
                    },
                    required: ["pacienteId", "profissionalId", "sintomas"]
                },

                // ====== Unidade ======
                Unidade: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        endereco: { type: "string" },
                        telefone: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    },
                    required: ["id", "nome", "endereco"]
                },
                UnidadeInput: {
                    type: "object",
                    properties: {
                        nome: { type: "string" },
                        endereco: { type: "string" },
                        telefone: { type: "string" }
                    },
                    required: ["nome", "endereco"]
                }
            }
        }
    },
    apis: ["./routes/**/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
