const express = require("express");
const router = express.Router();
const triagemController = require("../controllers/triagemController");
const authMiddleware = require("../middlewares/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Triagem
 *   description: Endpoints para gerenciar triagens
 */

/**
 * @swagger
 * /triagens:
 *   post:
 *     summary: Criar uma nova triagem
 *     tags: [Triagem]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TriagemInput'
 *     responses:
 *       201:
 *         description: Triagem criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Triagem'
 */
router.post("/", authMiddleware, triagemController.criar);

/**
 * @swagger
 * /triagens:
 *   get:
 *     summary: Listar todas as triagens
 *     tags: [Triagem]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de triagens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Triagem'
 */
router.get("/", authMiddleware, triagemController.listar);

/**
 * @swagger
 * /triagens/{id}:
 *   get:
 *     summary: Buscar uma triagem pelo ID
 *     tags: [Triagem]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Triagem encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Triagem'
 *       404:
 *         description: Triagem não encontrada
 */
router.get("/:id", authMiddleware, triagemController.buscarPorId);

/**
 * @swagger
 * /triagens/{id}:
 *   patch:
 *     summary: Atualizar uma triagem pelo ID
 *     tags: [Triagem]
 *     security:
 *      - bearerAuth: []
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
 *             $ref: '#/components/schemas/TriagemInput'
 *     responses:
 *       200:
 *         description: Triagem atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Triagem'
 *       404:
 *         description: Triagem não encontrada
 */
router.patch("/:id", authMiddleware, triagemController.atualizar);

/**
 * @swagger
 * /triagens/{id}:
 *   delete:
 *     summary: Deletar uma triagem pelo ID
 *     tags: [Triagem]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Triagem deletada com sucesso
 *       404:
 *         description: Triagem não encontrada
 */
router.delete("/:id", authMiddleware, triagemController.deletar);

module.exports = router;
