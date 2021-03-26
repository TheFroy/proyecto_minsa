const express = require('express');
const router = express.Router()
const usuarioController = require('../controllers/usuarios.controllers')

router.get('/usuario/auth', usuarioController.auth)


module.exports = router  