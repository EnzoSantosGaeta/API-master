import mysql from 'mysql2/promise'

const conection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'enzogaeta17',
  database: ''
})

export { conection }