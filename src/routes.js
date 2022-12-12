const express = require('express')

const routes = express.Router()

const mainController = require('./mainControllers/mainController')

routes.get('/', mainController.raiz)

routes.post('/entrevistadosadd', mainController.addEntrevistados)
routes.get('/entrevistados', mainController.getEntrevistados)

//rotas
routes.get('/entrevistados/getTotalRendaFixa', mainController.getTotalEntrevistadosRendaFixa)
routes.get('/entrevistados/getTotalRendaVariavel', mainController.getTotalEntrevistadosRendaVariavel)
routes.get('/entrevistados/getTotalConhecimentoJurosComposto', mainController.getTotalConhecimentoJurosComposto)
routes.get('/entrevistados/getMediaIdadeRendaFixa', mainController.getMediaIdadeRendaFixa)
routes.get('/entrevistados/getMediaIdadeRendaVariavel', mainController.getMediaIdadeRendaVariavel)
routes.get('/entrevistados/getEntrevistadosQueInvestemEmAlgumAtivo', mainController.getEntrevistadosQueInvestemEmAlgumAtivo)

module.exports = routes