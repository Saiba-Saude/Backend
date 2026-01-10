const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints de autenticação
 */

/**
 * @swagger
 * /login/profissional:
 *   post:
 *     summary: Login do profissional
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
<<<<<<< HEAD
 *             $ref: '#/components/schemas/LoginProfissionalInput'
=======
 *             $ref: '#/components/schemas/LoginInput'
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login/profissional", AuthController.loginProfissional);

/**
 * @swagger
 * /login/medico:
 *   post:
 *     summary: Login do médico
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
<<<<<<< HEAD
 *             $ref: '#/components/schemas/LoginMedicoInput'
=======
 *             $ref: '#/components/schemas/LoginInput'
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login/medico", AuthController.loginMedico);

/**
 * @swagger
 * /login/paciente:
 *   post:
 *     summary: Login do paciente
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
<<<<<<< HEAD
 *             $ref: '#/components/schemas/LoginPacienteInput'
=======
 *             $ref: '#/components/schemas/LoginInput'
>>>>>>> fbe1350d61609c6778838c7a8ec4e2b661faa0ca
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login/paciente", AuthController.loginPaciente);

module.exports = router;
