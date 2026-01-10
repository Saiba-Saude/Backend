const express = require("express");
const router = express.Router();
const triagemController = require("../controllers/triagemController");
<<<<<<< HEAD
const authMiddleware = require("../middlewares/authMiddleware");
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

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
 *             $ref: '#/components/schemas/TriagemInput'
 *     responses:
 *       201:
 *         description: Triagem criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Triagem'
 */
<<<<<<< HEAD
router.post("/", authMiddleware, triagemController.criar);
=======
router.post("/", triagemController.criar);
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

/**
 * @swagger
 * /triagens:
 *   get:
 *     summary: Listar todas as triagens
 *     tags: [Triagem]
<<<<<<< HEAD
 *     security:
 *      - bearerAuth: []
=======
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
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
<<<<<<< HEAD
router.get("/", authMiddleware, triagemController.listar);
=======
router.get("/", triagemController.listar);
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

/**
 * @swagger
 * /triagens/{id}:
 *   get:
 *     summary: Buscar uma triagem pelo ID
 *     tags: [Triagem]
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
 *         description: Triagem encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Triagem'
 *       404:
 *         description: Triagem não encontrada
 */
<<<<<<< HEAD
router.get("/:id", authMiddleware, triagemController.buscarPorId);
=======
router.get("/:id", triagemController.buscarPorId);
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

/**
 * @swagger
 * /triagens/{id}:
 *   patch:
 *     summary: Atualizar uma triagem pelo ID
 *     tags: [Triagem]
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
<<<<<<< HEAD
router.patch("/:id", authMiddleware, triagemController.atualizar);
=======
router.patch("/:id", triagemController.atualizar);
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

/**
 * @swagger
 * /triagens/{id}:
 *   delete:
 *     summary: Deletar uma triagem pelo ID
 *     tags: [Triagem]
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
 *         description: Triagem deletada com sucesso
 *       404:
 *         description: Triagem não encontrada
 */
<<<<<<< HEAD
router.delete("/:id", authMiddleware, triagemController.deletar);
=======
router.delete("/:id", triagemController.deletar);
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca

module.exports = router;
