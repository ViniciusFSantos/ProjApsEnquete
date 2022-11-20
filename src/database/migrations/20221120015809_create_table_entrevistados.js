exports.up = knex => knex.schema.createTable('entrevistados', table=>{
    table.increments('id')

    table.text('nome').notNullable()
    table.timestamp('entrevistado_em').defaultTo(knex.fn.now())
    table.tinyint('idade', 3).notNullable()
    table.enu('sexo',['M','F']).notNullable()
    table.enu('estado_onde_mora',['Acre', 'Alagoas','Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']).notNullable()
    table.enu('grau_escolaridade',['Sem escolaridade', 'Ensino fundamental incompleto', 'Ensino fundamental completo', 'Ensino médio incompleto', 'Ensino médio completo', 'Superior incompleto', 'Superior completo']).notNullable()
    table.enu('ocupacao',['Estudante', 'Desempregado', 'Empresário', 'Servidor Público', 'Autonomo', 'Aposentado', 'Funcionário setor Privado']).notNullable()
    table.enu('renda_mensal',['Até um salário mínimo', 'De dois a três salários mínimos', 'Quatro a cinco salários mínimos', 'Mais de 5 salários mínimos']).notNullable()
    table.enu('nivel_conhecimento_de_ativos', ['Não possui', 'Básico', 'Médio', 'Avançado', 'Formação superior na área financeira']).notNullable()
    table.enu('conhece_jc',['Sim', 'Não']).notNullable()
    table.enu('investe_rdf',['Sim', 'Não']).notNullable()
    table.enu('investe_rdv',['Sim', 'Não']).notNullable()

    /*
    adicionar mais campos de dados aqui futuramente | comando para rodar as migrations npx knex migrate:latest
    */

  })

exports.down = knex => knex.schema.dropTable('entrevistados', 'projaps', 'projaps_lock')