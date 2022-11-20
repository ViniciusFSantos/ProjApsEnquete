const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())
app.use(routes)

app.listen(3344, () => console.log('Rodando servidor na porta 3344'))