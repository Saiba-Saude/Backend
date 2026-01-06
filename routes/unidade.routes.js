const express = require("express");
const router = express.Router();
const unidadeController = require("../controllers/unidadeController");

/**
 * @swagger
 * tags:
 *   name: Unidade
 *   description: Endpoints para gerenciar unidades
 */

/**
 * @swagger
 * /unidades:
 *   post:
 *     summary: Criar uma nova unidade
 *     tags: [Unidade]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UnidadeInput'
 *     responses:
 *       201:
 *         description: Unidade criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unidade'
 */
router.post("/", unidadeController.criar);

/**
 * @swagger
 * /unidades:
 *   get:
 *     summary: Listar todas as unidades
 *     tags: [Unidade]
 *     responses:
 *       200:
 *         description: Lista de unidades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Unidade'
 */
router.get("/", unidadeController.listar);

/**
 * @swagger
 * /unidades/{id}:
 *   get:
 *     summary: Buscar uma unidade pelo ID
 *     tags: [Unidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Unidade encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unidade'
 *       404:
 *         description: Unidade não encontrada
 */
router.get("/:id", unidadeController.buscarPorId);

/**
 * @swagger
 * /unidades/{id}:
 *   patch:
 *     summary: Atualizar uma unidade pelo ID
 *     tags: [Unidade]
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
 *             $ref: '#/components/schemas/UnidadeInput'
 *     responses:
 *       200:
 *         description: Unidade atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unidade'
 *       404:
 *         description: Unidade não encontrada
 */
router.patch("/:id", unidadeController.atualizar);

/**
 * @swagger
 * /unidades/{id}:
 *   delete:
 *     summary: Deletar uma unidade pelo ID
 *     tags: [Unidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Unidade deletada com sucesso
 *       404:
 *         description: Unidade não encontrada
 */
router.delete("/:id", unidadeController.deletar);

module.exports = router;
