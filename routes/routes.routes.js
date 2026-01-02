const express = require("express");
const router = express.Router();
const pacienteController = require("../controlles/pacienteControlles");

router.post("/cadastro", pacienteController.criar);
router.get("/", pacienteController.listar);
router.patch("/atualizar/:id", pacienteController.atualizar);
router.delete("/deletar/:id", pacienteController.deletar);
router.get("/:nome", pacienteController.buscarPorNome);

module.exports = router;