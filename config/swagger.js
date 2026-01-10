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
<<<<<<< HEAD
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
=======
                // ====== Auth ======
                LoginInput: {
                    type: "object",
                    properties: {
                        email: { type: "string", example: "usuario@email.com" },
                        senha: { type: "string", example: "senha123" }
                    },
                    required: ["email", "senha"]
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
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
<<<<<<< HEAD
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
=======
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
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                },

                // ====== Médico ======
                Medico: {
                    type: "object",
<<<<<<< HEAD
                    required: ["id", "nome", "especialidade", "crm"],
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        especialidade: { type: "string" },
<<<<<<< HEAD
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
=======
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
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                },

                // ====== Profissional ======
                Profissional: {
                    type: "object",
<<<<<<< HEAD
                    required: ["id", "nome", "cargo", "cpf"],
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        cargo: { type: "string" },
<<<<<<< HEAD
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
=======
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
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                },

                // ====== Agendamento ======
                Agendamento: {
                    type: "object",
<<<<<<< HEAD
                    required: ["id", "pacienteId", "medicoId", "data", "status"],
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                    properties: {
                        id: { type: "integer" },
                        pacienteId: { type: "integer" },
                        medicoId: { type: "integer" },
                        data: { type: "string", format: "date-time" },
<<<<<<< HEAD
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
=======
                        status: { type: "string", enum: ["pendente", "confirmado", "cancelado"] },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
                    },
                    required: ["id", "pacienteId", "medicoId", "data", "status"]
                },
                AgendamentoInput: {
                    type: "object",
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                    properties: {
                        pacienteId: { type: "integer" },
                        medicoId: { type: "integer" },
                        data: { type: "string", format: "date-time" },
<<<<<<< HEAD
                        status: {
                            type: "string",
                            enum: ["pendente", "confirmado", "cancelado"]
                        }
                    }
=======
                        status: { type: "string", enum: ["pendente", "confirmado", "cancelado"] }
                    },
                    required: ["pacienteId", "medicoId", "data", "status"]
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                },

                // ====== Triagem ======
                Triagem: {
                    type: "object",
<<<<<<< HEAD
                    required: ["id", "pacienteId", "profissionalId", "sintomas"],
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                    properties: {
                        id: { type: "integer" },
                        pacienteId: { type: "integer" },
                        profissionalId: { type: "integer" },
                        sintomas: { type: "string" },
                        observacoes: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
<<<<<<< HEAD
                    }
                },
                TriagemInput: {
                    type: "object",
                    required: ["pacienteId", "profissionalId", "sintomas"],
=======
                    },
                    required: ["id", "pacienteId", "profissionalId", "sintomas"]
                },
                TriagemInput: {
                    type: "object",
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                    properties: {
                        pacienteId: { type: "integer" },
                        profissionalId: { type: "integer" },
                        sintomas: { type: "string" },
                        observacoes: { type: "string" }
<<<<<<< HEAD
                    }
=======
                    },
                    required: ["pacienteId", "profissionalId", "sintomas"]
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                },

                // ====== Unidade ======
                Unidade: {
                    type: "object",
<<<<<<< HEAD
                    required: ["id", "nome", "endereco"],
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                    properties: {
                        id: { type: "integer" },
                        nome: { type: "string" },
                        endereco: { type: "string" },
                        telefone: { type: "string" },
                        criadoEm: { type: "string", format: "date-time" },
                        atualizadoEm: { type: "string", format: "date-time" }
<<<<<<< HEAD
                    }
                },
                UnidadeInput: {
                    type: "object",
                    required: ["nome", "endereco"],
=======
                    },
                    required: ["id", "nome", "endereco"]
                },
                UnidadeInput: {
                    type: "object",
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                    properties: {
                        nome: { type: "string" },
                        endereco: { type: "string" },
                        telefone: { type: "string" }
<<<<<<< HEAD
                    }
=======
                    },
                    required: ["nome", "endereco"]
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
                }
            }
        }
    },
    apis: ["./routes/**/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);
<<<<<<< HEAD
module.exports = swaggerSpec;
=======

module.exports = swaggerSpec;
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
