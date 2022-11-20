module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'projaps',
      user:'postgres',
      password:'123',
      host: 'localhost',
      port: 5432,

    },
    migrations:{
      tableName: 'projaps',
      directory: `${__dirname}/src/database/migrations`,

    }
  },

}
