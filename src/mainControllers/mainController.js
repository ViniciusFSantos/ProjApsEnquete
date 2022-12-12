const { reset } = require('nodemon')
const knex = require('../database')


module.exports ={

    async raiz(req, res){
        const result = await console.log('servidor requisitado')

        const msg =['API de enquete financeira! Utilize as rotas para obter dados:...',' Adicionar um entrevistado=> /entrevistadosadd ',' Dados de todos os entrevistados=> /entrevistados ',' Total de entrevistados que investem em Renda Fixa=> /entrevistados/getTotalRendaFixa ', ' Total de entrevistados que investem em Renda Variável=> /entrevistados/getTotalRendaVariavel ',
        ' Total de entrevistados que conhecem ou já ouviram falar em juros compostos=> /entrevistados/getTotalConhecimentoJurosComposto ', 'Média de idade entre entrevistados que investem em Renda Fixa=> /entrevistados/getMediaIdadeRendaFixa',
        ' Média de idade entre entrevistados que investem em Renda Variável=> /entrevistados/getMediaIdadeRendaVariavel ',' Entrevistados que investem em algum tipo de ativo=> /entrevistados/getEntrevistadosQueInvestemEmAlgumAtivo '
    ]

        return res.send(msg)
        
    },
    
    async getEntrevistados(req, res){
        try{
            
            querysetall = await knex('entrevistados')
            return res.json(querysetall)

        }catch{

            return res.status(400).json({error: error.message})

        }
    },

    async getTotalEntrevistadosRendaFixa(req, res){
        try{
            
            querysetall = await knex('entrevistados').where('investe_rdf', 'Sim').count()
            return res.json(querysetall)

        }catch{

            return res.status(400).json({error: error.message})

        }
    },

    async getTotalEntrevistadosRendaVariavel(req, res){
        try{
            
            querysetall = await knex('entrevistados').where('investe_rdv', 'Sim').count()
            return res.json(querysetall)

        }catch{

            return res.status(400).json({error: error.message})

        }
    },

    async getTotalConhecimentoJurosComposto(req, res){
        try{
            
            querysetall = await knex('entrevistados').where('conhece_jc', 'Sim').count()
            return res.json(querysetall)

        }catch{

            return res.status(400).json({error: error.message})

        }
    },

    async getMediaIdadeRendaFixa(req, res){
        try{
            
            querysetall = await knex('entrevistados').where('investe_rdf', 'Sim').avg('idade')
            return res.json(querysetall)

        }catch{

            return res.status(400).json({error: error.message})

        }
    },

    async getMediaIdadeRendaVariavel(req, res){
        try{
            
            querysetall = await knex('entrevistados').where('investe_rdv', 'Sim').avg('idade')
            return res.json(querysetall)

        }catch{

            return res.status(400).json({error: error.message})

        }
    },
    async getEntrevistadosQueInvestemEmAlgumAtivo(req, res){
        try{
            
            querysetall = await knex('entrevistados').where('investe_rdv', 'Sim').orWhere('investe_rdf', 'Sim')
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