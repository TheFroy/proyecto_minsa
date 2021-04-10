const express = require('express');
const router = express.Router()
const usuariosController = require('../controllers/usuarios.controllers')

router.get('/', usuariosController.read)

router.get('/:id', usuariosController.readId)

router.post('/create', usuariosController.create)

router.post('/login', usuariosController.auth)

module.exports = router  