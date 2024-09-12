// const mysql = require('mysql2/promise');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'ncc_try',
//   password: '',
// });



// module.exports = pool;

const Pool = require('pg').Pool

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool

// const Pool = require('pg').Pool

// const pool = new Pool({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "12345",
//     database: "test_api"
// })

// module.exports = pool

// client.connect();

// client.query(`Select * from biodata`, (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     }else{
//         console.log(err.message);
//     }
//     client.end
// })
