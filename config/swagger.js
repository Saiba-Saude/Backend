const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Pacientes",
            version: "1.0.0",
            description: "Documentação da API de Pacientes"
        },
        servers: [
            {
                url: "http://localhost:8081/",
                description: "Servidor Local"
            }
        ]
    },
    apis: ["./src/routes/*.js"] // caminho das rotas
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;