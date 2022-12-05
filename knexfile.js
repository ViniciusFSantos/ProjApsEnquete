module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'projaps',
      user:'postgres',
      password:'Vini@852$',
      host: 'localhost',
      port: 5432,

    },
    migrations:{
      tableName: 'projaps',
      directory: `${__dirname}/src/database/migrations`,

    }
  },

}
