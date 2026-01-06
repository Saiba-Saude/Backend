const express = require("express");
const router = express.Router();
const agendamentoController = require("../controllers/agendamentoController");

/**
 * @swagger
 * tags:
 *   name: Agendamento
 *   description: Endpoints para gerenciar agendamentos
 */

/**
 * @swagger
 * /agendamentos:
 *   post:
 *     summary: Criar um novo agendamento
 *     tags: [Agendamento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AgendamentoInput'
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamento'
 */
router.post("/", agendamentoController.criar);

/**
 * @swagger
 * /agendamentos:
 *   get:
 *     summary: Listar todos os agendamentos
 *     tags: [Agendamento]
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Agendamento'
 */
router.get("/", agendamentoController.listar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   get:
 *     summary: Buscar um agendamento pelo ID
 *     tags: [Agendamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Agendamento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamento'
 *       404:
 *         description: Agendamento não encontrado
 */
router.get("/:id", agendamentoController.buscarPorId);

/**
 * @swagger
 * /agendamentos/{id}:
 *   patch:
 *     summary: Atualizar um agendamento pelo ID
 *     tags: [Agendamento]
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
 *             $ref: '#/components/schemas/AgendamentoInput'
 *     responses:
 *       200:
 *         description: Agendamento atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamento'
 *       404:
 *         description: Agendamento não encontrado
 */
router.patch("/:id", agendamentoController.atualizar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   delete:
 *     summary: Deletar um agendamento pelo ID
 *     tags: [Agendamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Agendamento deletado com sucesso
 *       404:
 *         description: Agendamento não encontrado
 */
router.delete("/:id", agendamentoController.deletar);

module.exports = router;
