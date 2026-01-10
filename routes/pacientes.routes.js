const express = require("express");
const router = express.Router();
const pacienteController = require("../controllers/pacienteController");

/**
 * @swagger
 * tags:
 *   name: Paciente
 *   description: Endpoints para gerenciar pacientes
 */

/**
 * @swagger
 * /saibamais:
 *   post:
 *     summary: Criar um novo paciente
 *     tags: [Paciente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PacienteInput'
 *     responses:
 *       201:
 *         description: Paciente criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 */
router.post("/saibamais", pacienteController.criar);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Listar todos os pacientes
 *     tags: [Paciente]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente'
 */
router.get("/", pacienteController.listar);

/**
 * @swagger
 * /atualizar/{id}:
 *   patch:
 *     summary: Atualizar um paciente pelo ID
 *     tags: [Paciente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PacienteInput'
 *     responses:
 *       200:
 *         description: Paciente atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       404:
 *         description: Paciente não encontrado
 */
router.patch("/atualizar/:id", pacienteController.atualizar);

/**
 * @swagger
 * /deletar/{id}:
 *   delete:
 *     summary: Deletar um paciente pelo ID
 *     tags: [Paciente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Paciente deletado com sucesso
 *       404:
 *         description: Paciente não encontrado
 */
router.delete("/deletar/:id", pacienteController.deletar);

/**
 * @swagger
 * /buscar/{nome}:
 *   get:
 *     summary: Buscar paciente pelo nome
 *     tags: [Paciente]
 *     parameters:
 *       - in: path
 *         name: nome
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pacientes encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente'
 */
router.get("/buscar/:nome", pacienteController.buscarPorNome);

module.exports = router;
