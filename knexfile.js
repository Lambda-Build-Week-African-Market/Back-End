// Update with your config settings.

const baseConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  pool: {
    afterCreate: (connect, done) => connect.run('PRAGMA foreign_keys = ON', done)
  },
}

module.exports = {

  development: {
    ...baseConfig,
    connection: {
      filename: './data/marketDB.db3'
    }
  },

  // COMMENTED OUT UNTIL ON HEROKU
  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   }
  // },

  // COMMENTED OUT UNTIL FINISHED
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   }
  // }

};
