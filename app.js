const express = require("express");
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const pacienteRoutes = require("./routes/pacientes.routes");
const medicoRoutes = require("./routes/medicos.routes");
const profissionalRoutes = require("./routes/profissionais.routes");
const triagemRoutes = require("./routes/triagem.routes");
const unidadeRoutes = require("./routes/unidade.routes");
const agendamentoRoutes = require("./routes/agendamento.routes");
const authRoutes = require("./routes/auth.routes");

const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/pacientes", pacienteRoutes);
app.use("/medicos", medicoRoutes);
app.use("/profissionais", profissionalRoutes);
app.use("/triagens", triagemRoutes);
app.use("/unidades", unidadeRoutes);
app.use("/agendamentos", agendamentoRoutes);

app.use("/auth", authRoutes);

app.use(errorHandler);

app.listen(8081, () => {
    console.log("Servidor está Funcionando!");
    console.log("Swagger disponível em http://localhost:8081/api-docs");
});