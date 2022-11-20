const { reset } = require('nodemon')
const knex = require('../database')


module.exports ={

    async raiz(req, res){
        const result = await console.log('servidor requisitado')

        return res.send('Seja bem-vindo a API de enquete financeira!!')
    },
    
    async getEntrevistados(req, res){
        try{
            
            querysetall = await knex('entrevistados')
            return res.json(querysetall)

        }catch{

            return res.status(400).json({error: error.message})

        }
    },

    async addEntrevistados(req, res){
        try{
            const{nome} = req.body
            const{idade} = req.body
            const{sexo} = req.body
            const{estado_onde_mora} = req.body
            const{grau_escolaridade} = req.body
            const{ocupacao} = req.body
            const{renda_mensal} = req.body
            const{nivel_conhecimento_de_ativos} = req.body
            const{conhece_jc} = req.body
            const{investe_rdf} = req.body
            const{investe_rdv} = req.body
            
            await knex('entrevistados').insert({
                nome,
                idade,
                sexo,
                estado_onde_mora,
                grau_escolaridade,
                ocupacao,
                renda_mensal,
                nivel_conhecimento_de_ativos,
                conhece_jc,
                investe_rdf,
                investe_rdv
            }) 

            console.log(res)
            return res.status(201).json('Cadastrado com sucesso!')

        }catch (error){
            console.log('Erro ao adicionar entrevistado')
            return res.status(400).json({error: error.message})
        }
    },

    
}