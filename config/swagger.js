const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Gestão de Clínica",
      version: "1.0.0",
      description:
        "Documentação completa da API de pacientes, médicos, profissionais, agendamentos, triagens, unidades e autenticação",
    },
    servers: [
      {
        url: "http://localhost:8081",
        description: "Servidor Local",
      },
    ],

    components: {
      /* ====== Segurança ====== */
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      /* ====== Schemas ====== */
      schemas: {
        /* ====== Auth ====== */
        LoginInput: {
          type: "object",
          required: ["email", "senha"],
          properties: {
            email: { type: "string", example: "usuario@email.com" },
            senha: { type: "string", example: "senha123" },
          },
        },
        LoginResponse: {
          type: "object",
          properties: {
            token: {
              type: "string",
              example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            },
          },
        },
        LoginProfissionalInput: {
          type: "object",
          required: ["cpf", "senha"],
          properties: {
            cpf: { type: "string", example: "usuario@email.com" },
            senha: { type: "string", example: "senha123" },
          },
        },
LoginMedicoInput: {
          type: "object",
          required: ["crm", "senha"],
          properties: {
            crm: { type: "string", example: "usuario@email.com" },
            senha: { type: "string", example: "senha123" },
          },
        },
LoginPacienteInput: {
          type: "object",
          required: ["cartaosus", "senha"],
          properties: {
            cartaosus: { type: "string", example: "usuario@email.com" },
            senha: { type: "string", example: "senha123" },
          },
        },

        /* ====== Paciente ====== */
        Paciente: {
  type: "object",
  required: [
    "idpacientes",
    "nome",
    "cartaosus",
    "sexo",
    "nascimento",
    "telefone",
    "bairro",
    "municipio"
  ],
  properties: {
    idpacientes: {
      type: "integer",
      example: 1
    },
    nome: {
      type: "string",
      example: "Carlos Souza"
    },
    cartaosus: {
      type: "string",
      example: "898001160429377"
    },
    sexo: {
      type: "string",
      enum: ["Masculino", "Feminino", "Outro"],
      example: "Masculino"
    },
    nascimento: {
      type: "string",
      format: "date",
      example: "2001-09-10"
    },
    telefone: {
      type: "string",
      example: "(11) 98888-7777"
    },
    bairro: {
      type: "string",
      example: "Centro"
    },
    municipio: {
      type: "string",
      example: "São Paulo"
    }
  }
},
        PacienteInput: {
  type: "object",
  required: [
    "nome",
    "cartaosus",
    "sexo",
    "nascimento",
    "telefone",
    "bairro",
    "municipio",
    "senha"
  ],
  properties: {
    nome: {
      type: "string",
      maxLength: 80,
      example: "Carlos Souza"
    },
    cartaosus: {
      type: "string",
      maxLength: 20,
      example: "898001160429377"
    },
    sexo: {
      type: "string",
      enum: ["Masculino", "Feminino", "Outro"],
      example: "Masculino"
    },
    nascimento: {
      type: "string",
      format: "date",
      example: "2001-09-10"
    },
    telefone: {
      type: "string",
      maxLength: 30,
      example: "(11) 98888-7777"
    },
    bairro: {
      type: "string",
      maxLength: 45,
      example: "Centro"
    },
    municipio: {
      type: "string",
      maxLength: 45,
      example: "São Paulo"
    },
    senha: {
      type: "string",
      format: "password",
      example: "Senha@123"
    }
  }
},

        /* ====== Médico ====== */
        Medico: {
  type: "object",
  required: [
    "idmedicos",
    "nome",
    "sexo",
    "nascimento",
    "crm",
    "especializacao"
  ],
  properties: {
    idmedicos: {
      type: "integer",
      example: 1
    },
    nome: {
      type: "string",
      example: "João da Silva"
    },
    sexo: {
      type: "string",
      enum: ["M", "F"],
      example: "M"
    },
    nascimento: {
      type: "string",
      format: "date",
      example: "1985-06-20"
    },
    crm: {
      type: "string",
      example: "CRM-SP 123456"
    },
    especializacao: {
      type: "string",
      example: "Cardiologia"
    }
  }
},

        MedicoInput: {
  type: "object",
  required: [
    "nome",
    "sexo",
    "nascimento",
    "crm",
    "especializacao",
    "senha"
  ],
  properties: {
    nome: {
      type: "string",
      maxLength: 80,
      example: "João da Silva"
    },
    sexo: {
      type: "string",
      enum: ["M", "F"],
      example: "M"
    },
    nascimento: {
      type: "string",
      format: "date",
      example: "1985-06-20"
    },
    crm: {
      type: "string",
      maxLength: 45,
      example: "CRM-SP 123456"
    },
    especializacao: {
      type: "string",
      maxLength: 80,
      example: "Cardiologia"
    },
    senha: {
      type: "string",
      format: "password",
      example: "Senha@123"
    }
  }
},


        /* ====== Profissional ====== */
        Profissional: {
  type: "object",
  required: [
    "idprofissionais",
    "nome",
    "sexo",
    "nascimento",
    "cpf",
    "rg",
    "telefone"
  ],
  properties: {
    idprofissionais: {
      type: "integer",
      example: 1
    },
    nome: {
      type: "string",
      example: "Maria Oliveira"
    },
    sexo: {
      type: "string",
      enum: ["M", "F"],
      example: "F"
    },
    nascimento: {
      type: "string",
      format: "date",
      example: "1990-03-15"
    },
    cpf: {
      type: "string",
      example: "12345678900"
    },
    rg: {
      type: "string",
      example: "12345678"
    },
    telefone: {
      type: "string",
      example: "(11) 99999-9999"
    }
  }
},

        ProfissionalInput: {
  type: "object",
  required: [
    "nome",
    "sexo",
    "nascimento",
    "cpf",
    "rg",
    "telefone",
    "senha"
  ],
  properties: {
    nome: {
      type: "string",
      maxLength: 80,
      example: "Maria Oliveira"
    },
    sexo: {
      type: "string",
      enum: ["M", "F"],
      example: "F"
    },
    nascimento: {
      type: "string",
      format: "date",
      example: "1990-03-15"
    },
    cpf: {
      type: "string",
      example: "12345678900"
    },
    rg: {
      type: "string",
      example: "12345678"
    },
    telefone: {
      type: "string",
      maxLength: 45,
      example: "(11) 99999-9999"
    },
    senha: {
      type: "string",
      format: "password",
      example: "Senha@123"
    }
  }
},

        /* ====== Agendamento ====== */
        Agendamento: {
  type: "object",
  required: [
    "idagendamentos",
    "data",
    "pacientes_idpacientes",
    "triagem_idtriagem",
    "unidades_idunidades"
  ],
  properties: {
    idagendamentos: {
      type: "integer",
      example: 1
    },
    data: {
      type: "string",
      format: "date-time",
      example: "2026-01-20T14:30:00Z"
    },
    descricao: {
      type: "string",
      example: "Consulta de rotina"
    },
    pacientes_idpacientes: {
      type: "integer",
      example: 10
    },
    triagem_idtriagem: {
      type: "integer",
      example: 3
    },
    unidades_idunidades: {
      type: "integer",
      example: 2
    }
  }
},
        AgendamentoInput: {
  type: "object",
  required: [
    "data",
    "pacientes_idpacientes",
    "triagem_idtriagem",
    "unidades_idunidades"
  ],
  properties: {
    data: {
      type: "string",
      format: "date-time",
      example: "2026-01-20T14:30:00Z"
    },
    descricao: {
      type: "string",
      example: "Consulta de retorno"
    },
    pacientes_idpacientes: {
      type: "integer",
      example: 10
    },
    triagem_idtriagem: {
      type: "integer",
      example: 3
    },
    unidades_idunidades: {
      type: "integer",
      example: 2
    }
  }
},

        /* ====== Triagem ====== */
        Triagem: {
  type: "object",
  required: ["id", "tipo", "gravidade"],
  properties: {
    id: {
      type: "integer",
      example: 1
    },
    tipo: {
      type: "string",
      example: "atendimento"
    },
    gravidade: {
      type: "string",
      enum: ["baixa", "media", "alta"]
    }
  }
},

TriagemInput: {
  type: "object",
  required: ["tipo", "gravidade"],
  properties: {
    tipo: {
      type: "string",
      example: "atendimento"
    },
    gravidade: {
      type: "string",
      enum: ["baixa", "media", "alta"]
    }
  }
},

        /* ====== Unidade ====== */
        Unidade: {
  type: "object",
  required: [
    "id",
    "nome",
    "medicos_idmedicos",
    "profissionais_idprofissionais"
  ],
  properties: {
    id: {
      type: "integer",
      example: 1
    },
    nome: {
      type: "string",
      example: "Unidade Central"
    },
    funcionamento: {
      type: "string",
      example: "Segunda a Sexta, 08h às 18h"
    },
    rua: {
      type: "string",
      example: "Rua das Flores, 123"
    },
    municipio: {
      type: "string",
      example: "São Paulo"
    },
    medicos_idmedicos: {
      type: "integer",
      example: 10
    },
    profissionais_idprofissionais: {
      type: "integer",
      example: 5
    }
  }
},

UnidadeInput: {
  type: "object",
  required: [
    "nome",
    "medicos_idmedicos",
    "profissionais_idprofissionais"
  ],
  properties: {
    nome: {
      type: "string",
      example: "Unidade Central"
    },
    funcionamento: {
      type: "string",
      example: "Segunda a Sexta, 08h às 18h"
    },
    rua: {
      type: "string",
      example: "Rua das Flores, 123"
    },
    municipio: {
      type: "string",
      example: "São Paulo"
    },
    medicos_idmedicos: {
      type: "integer",
      example: 10
    },
    profissionais_idprofissionais: {
      type: "integer",
      example: 5
    }
  }
},
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["./routes/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;