const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_SCHEME,
  password: process.env.DB_PASSWORD?process.env.DB_PASSWORD:'',
  post: process.env.DB_POST
})

module.exports = pool
