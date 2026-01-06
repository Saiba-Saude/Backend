const express = require("express");
const router = express.Router();
const medicoController = require("../controllers/medicoController");

/**
 * @swagger
 * tags:
 *   name: Medico
 *   description: Endpoints para gerenciar médicos
 */

/**
 * @swagger
 * /medicos:
 *   post:
 *     summary: Criar um novo médico
 *     tags: [Medico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MedicoInput'
 *     responses:
 *       201:
 *         description: Médico criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medico'
 */
router.post("/", medicoController.criar);

/**
 * @swagger
 * /medicos:
 *   get:
 *     summary: Listar todos os médicos
 *     tags: [Medico]
 *     responses:
 *       200:
 *         description: Lista de médicos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Medico'
 */
router.get("/", medicoController.listar);

/**
 * @swagger
 * /medicos/{id}:
 *   get:
 *     summary: Buscar um médico pelo ID
 *     tags: [Medico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Médico encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medico'
 *       404:
 *         description: Médico não encontrado
 */
router.get("/:id", medicoController.buscarPorId);

/**
 * @swagger
 * /medicos/{id}:
 *   patch:
 *     summary: Atualizar um médico pelo ID
 *     tags: [Medico]
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
 *             $ref: '#/components/schemas/MedicoInput'
 *     responses:
 *       200:
 *         description: Médico atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medico'
 *       404:
 *         description: Médico não encontrado
 */
router.patch("/:id", medicoController.atualizar);

/**
 * @swagger
 * /medicos/{id}:
 *   delete:
 *     summary: Deletar um médico pelo ID
 *     tags: [Medico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Médico deletado com sucesso
 *       404:
 *         description: Médico não encontrado
 */
router.delete("/:id", medicoController.deletar);

module.exports = router;
