require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const pacienteRoutes = require("./routes/pacientes.routes");
const medicoRoutes = require("./routes/medicos.routes");
const profissionaisRoutes = require("./routes/profissionais.routes");
const triagemRoutes = require("./routes/triagem.routes");
const unidadeRoutes = require("./routes/unidade.routes");
const agendamentoRoutes = require("./routes/agendamento.routes");
const authRoutes = require("./routes/auth.routes");

const errorHandler = require("./middlewares/errorHandler");

const app = express();


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(pacienteRoutes);
app.use(medicoRoutes);
app.use(profissionaisRoutes);
app.use(triagemRoutes);
app.use(unidadeRoutes);
app.use(agendamentoRoutes);
app.use(authRoutes);

app.use(errorHandler);

app.listen(process.env.PORT || 8081, () => {
  console.log("Servidor está Funcionando!");
  console.log(`Swagger disponível em http://localhost:${process.env.PORT || 8081}/api-docs`);
});
