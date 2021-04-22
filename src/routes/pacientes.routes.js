const express = require('express');
const router = express.Router()
const pacientesController = require('../controllers/pacientes.controllers')

router.get('/getall',pacientesController.getAll)
router.get('/getone/:id',pacientesController.getOne)

module.exports = router