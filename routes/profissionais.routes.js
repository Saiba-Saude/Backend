const express = require("express");
const router = express.Router();
const profissionalController = require("../controllers/profissionaisController");

/**
 * @swagger
 * tags:
 *   name: Profissional
 *   description: Endpoints para gerenciar profissionais
 */

/**
 * @swagger
 * /profissionais:
 *   post:
 *     summary: Criar um novo profissional
 *     tags: [Profissional]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfissionalInput'
 *     responses:
 *       201:
 *         description: Profissional criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissional'
 */

router.post("/", async (req, res) => {
  try {
    console.log("BODY RECEBIDO:", req.body)

    res.status(201).json({
      message: "Profissional criado com sucesso",
      data: req.body,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Erro interno" })
  }
})


router.post("/profissionais", async (req, res) => {
  try {
    const profissional = await Profissional.create(req.body)
    res.status(201).json(profissional)
  } catch (error) {
    console.error("ERRO AO CRIAR PROFISSIONAL:", error)
    res.status(500).json({
      message: "Erro interno no servidor",
      error: error.message
    })
  }
})


/**
 * @swagger
 * /profissionais:
 *   get:
 *     summary: Listar todos os profissionais
 *     tags: [Profissional]
 *     responses:
 *       200:
 *         description: Lista de profissionais
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profissional'
 */
router.get("/", profissionalController.listar);

/**
 * @swagger
 * /profissionais/{id}:
 *   get:
 *     summary: Buscar um profissional pelo ID
 *     tags: [Profissional]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Profissional encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissional'
 *       404:
 *         description: Profissional não encontrado
 */
router.get("/:id", profissionalController.buscarPorId);

/**
 * @swagger
 * /profissionais/{id}:
 *   patch:
 *     summary: Atualizar um profissional pelo ID
 *     tags: [Profissional]
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
 *             $ref: '#/components/schemas/ProfissionalInput'
 *     responses:
 *       200:
 *         description: Profissional atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissional'
 *       404:
 *         description: Profissional não encontrado
 */
router.patch("/:id", profissionalController.atualizar);

/**
 * @swagger
 * /profissionais/{id}:
 *   delete:
 *     summary: Deletar um profissional pelo ID
 *     tags: [Profissional]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Profissional deletado com sucesso
 *       404:
 *         description: Profissional não encontrado
 */
router.delete("/:id", profissionalController.deletar);

module.exports = router;
