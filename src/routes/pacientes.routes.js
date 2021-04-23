const express = require('express');
const router = express.Router()
const pacientesController = require('../controllers/pacientes.controllers')

router.get('/getall',pacientesController.getAll)
router.get('/getone/:id',pacientesController.getOne)
router.get('/prueba', (req, res) =>{
    res.json('Esto es una prueba')
})

module.exports = router