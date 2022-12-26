require('dotenv').config()
module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "exbaseProject",
    host: process.env.DATABASE_HOSTNAME,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "database_test",
    host: process.env.DATABASE_HOSTNAME,
    dialect: "postgres"
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: "database_production",
    host: process.env.DATABASE_HOSTNAME,
    dialect: "postgres"
  }
}
