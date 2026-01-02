const express = require("express");
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const pacienteRoutes = require("./routes/routes.routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/pacientes", pacienteRoutes);

app.listen(8081, () => {
    console.log("Servidor está Funcionando!");
    console.log("Swagger disponível em http://localhost:8081/api-docs");
});