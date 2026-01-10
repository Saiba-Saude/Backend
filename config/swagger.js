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
                url: "http://localhost:8081",
                description: "Servidor Local"
            }
        ],
        components: {
            schemas: {
                // ====== Segurança ======
                securitySchemes: {
                    bearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT"
                    }
                },

                // ====== Auth ======
                LoginInput: {
                    type: "object",
                    required: ["email", "senha"],
                    properties: {
                        email: { type: "string", example: "usuario@email.com" },
                        senha: { type: "string", example: "senha123" }
                    }
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
                    required: ["id", "nome", "cartaosus"],
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        cartaosus: { type: "string" },
                        telefone: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    }
                },
                PacienteInput: {
                    type: "object",
                    required: ["nome", "cartaosus"],
                    properties: {
                        nome: { type: "string" },
                        cartaosus: { type: "string" },
                        telefone: { type: "string" }
                    }
                },
                LoginPacienteInput: {
                    type: "object",
                    required: ["cartaosus", "senha"],
                    properties: {
                        cartaosus: { type: "string", example: "8980011602345678901" },
                        senha: { type: "string", example: "123456" }
                    }
                },

                // ====== Médico ======
                Medico: {
                    type: "object",
                    required: ["id", "nome", "especialidade", "crm"],
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        especialidade: { type: "string" },
                        crm: { type: "string" },
                        telefone: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    }
                },
                MedicoInput: {
                    type: "object",
                    required: ["nome", "especialidade", "crm"],
                    properties: {
                        nome: { type: "string" },
                        especialidade: { type: "string" },
                        crm: { type: "string" },
                        telefone: { type: "string" }
                    }
                },
                LoginMedicoInput: {
                    type: "object",
                    required: ["crm", "senha"],
                    properties: {
                        crm: { type: "string", example: "CRM12345" },
                        senha: { type: "string", example: "123456" }
                    }
                },

                // ====== Profissional ======
                Profissional: {
                    type: "object",
                    required: ["id", "nome", "cargo", "cpf"],
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        cargo: { type: "string" },
                        cpf: { type: "string" },
                        telefone: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    }
                },
                ProfissionalInput: {
                    type: "object",
                    required: ["nome", "cargo", "cpf"],
                    properties: {
                        nome: { type: "string" },
                        cargo: { type: "string" },
                        cpf: { type: "string" },
                        telefone: { type: "string" }
                    }
                },
                LoginProfissionalInput: {
                    type: "object",
                    required: ["cpf", "senha"],
                    properties: {
                        cpf: { type: "string", example: "12345678900" },
                        senha: { type: "string", example: "123456" }
                    }
                },

                // ====== Agendamento ======
                Agendamento: {
                    type: "object",
                    required: ["id", "pacienteId", "medicoId", "data", "status"],
                    properties: {
                        id: { type: "integer" },
                        pacienteId: { type: "integer" },
                        medicoId: { type: "integer" },
                        data: { type: "string", format: "date-time" },
                        status: {
                            type: "string",
                            enum: ["pendente", "confirmado", "cancelado"]
                        },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    }
                },
                AgendamentoInput: {
                    type: "object",
                    required: ["pacienteId", "medicoId", "data", "status"],
                    properties: {
                        pacienteId: { type: "integer" },
                        medicoId: { type: "integer" },
                        data: { type: "string", format: "date-time" },
                        status: {
                            type: "string",
                            enum: ["pendente", "confirmado", "cancelado"]
                        }
                    }
                },

                // ====== Triagem ======
                Triagem: {
                    type: "object",
                    required: ["id", "pacienteId", "profissionalId", "sintomas"],
                    properties: {
                        id: { type: "integer" },
                        pacienteId: { type: "integer" },
                        profissionalId: { type: "integer" },
                        sintomas: { type: "string" },
                        observacoes: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    }
                },
                TriagemInput: {
                    type: "object",
                    required: ["pacienteId", "profissionalId", "sintomas"],
                    properties: {
                        pacienteId: { type: "integer" },
                        profissionalId: { type: "integer" },
                        sintomas: { type: "string" },
                        observacoes: { type: "string" }
                    }
                },

                // ====== Unidade ======
                Unidade: {
                    type: "object",
                    required: ["id", "nome", "endereco"],
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        endereco: { type: "string" },
                        telefone: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    }
                },
                UnidadeInput: {
                    type: "object",
                    required: ["nome", "endereco"],
                    properties: {
                        nome: { type: "string" },
                        endereco: { type: "string" },
                        telefone: { type: "string" }
                    }
                }
            }
        }
    },
    apis: ["./routes/**/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;