const express = require('express')

const routes = express.Router()

const mainController = require('./mainControllers/mainController')

routes.get('/', mainController.raiz)

routes.post('/entrevistadosadd', mainController.addEntrevistados)
routes.get('/entrevistados', mainController.getEntrevistados)


module.exports = routes