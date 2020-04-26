const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: process.env.HOST_CONNECT, 
  port: 3306,
  user: 'root',
  database: 'agenda-petshop',
  password: 'adm123',
})

module.exports = conexao