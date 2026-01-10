const express = require("express");
const router = express.Router();
const agendamentoController = require("../controllers/agendamentoController");
<<<<<<< HEAD
const authMiddleware = require("../middlewares/authMiddleware");
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

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
<<<<<<< HEAD
 *     security:
 *      - bearerAuth: []
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
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
<<<<<<< HEAD
router.post("/", authMiddleware, agendamentoController.criar);
=======
router.post("/", agendamentoController.criar);
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

/**
 * @swagger
 * /agendamentos:
 *   get:
 *     summary: Listar todos os agendamentos
 *     tags: [Agendamento]
<<<<<<< HEAD
 *     security:
 *      - bearerAuth: []
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
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
<<<<<<< HEAD
router.get("/", authMiddleware, agendamentoController.listar);
=======
router.get("/", agendamentoController.listar);
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

/**
 * @swagger
 * /agendamentos/{id}:
 *   get:
 *     summary: Buscar um agendamento pelo ID
 *     tags: [Agendamento]
<<<<<<< HEAD
 *     security:
 *      - bearerAuth: []
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
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
<<<<<<< HEAD
router.get("/:id", authMiddleware, agendamentoController.buscarPorId);
=======
router.get("/:id", agendamentoController.buscarPorId);
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

/**
 * @swagger
 * /agendamentos/{id}:
 *   patch:
 *     summary: Atualizar um agendamento pelo ID
 *     tags: [Agendamento]
<<<<<<< HEAD
 *     security:
 *      - bearerAuth: []
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
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
<<<<<<< HEAD
router.patch("/:id", authMiddleware, agendamentoController.atualizar);
=======
router.patch("/:id", agendamentoController.atualizar);
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

/**
 * @swagger
 * /agendamentos/{id}:
 *   delete:
 *     summary: Deletar um agendamento pelo ID
 *     tags: [Agendamento]
<<<<<<< HEAD
 *     security:
 *      - bearerAuth: []
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
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
<<<<<<< HEAD
router.delete("/:id", authMiddleware, agendamentoController.deletar);
=======
router.delete("/:id", agendamentoController.deletar);
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

module.exports = router;
