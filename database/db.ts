import mysql from 'mysql2/promise'

export const client = mysql.createPool({
  host: 'localhost',
  port: 3306,
  password: 'NZXT39002003uegl',
  user: 'root',
  database: 'alumnos'
})