const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'ncc_try',
  password: 'kweingetpasswordera13345',
});



module.exports = pool;

// const {Client} = require('pg')

// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "kweingetpasswordera13345",
//     database: "test_api"
// })

// client.connect();

// client.query(`Select * from biodata`, (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     }else{
//         console.log(err.message);
//     }
//     client.end
// })