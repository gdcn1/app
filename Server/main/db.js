const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER?process.env.DB_USER:'postgres',
  host: process.env.DB_HOST?process.env.DB_HOST:'localhost',
  database: process.env.DB_SCHEME?process.env.DB_SCHEME:'postgres',
  password: process.env.DB_PASSWORD?process.env.DB_PASSWORD:'postgres',
  post: process.env.DB_PORT?process.env.DB_PORT:'5432'
})

module.exports = pool
