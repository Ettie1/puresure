const express = require('express')
const app = express()
const mysql = require('mysql')
require('dotenv').config()

app.use(express.json())


const con = mysql.createConnection({
    host: process.env.Host,
    port: process.env.Port,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.Database,
    charset: 'utf8',
    debug: true,
    stringifyObjects: true
})

module.exports = con

// var mysql = require('mysql')

// const connectionString = "host=localhost;port=3306;user=root;password=Poppup@101;database=Tester;";
// var conn = mysql.createConnection(connectionString);
// var conn = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user:"root",
//     password: "Poppup@101",
//     database: "Tester"
// })

// conn.connect((err)=>{
//     if(err)
//     {
//         console.log("Error...")
//     }
//     console.log("Connected...")
//     conn.query("SELECT * FROM Policyholder", (error, results, fields)=>{
//         if(error){
//             throw error;
//         }
    
//         results.forEach(p => {
//             console.log(p.Title," ",p.Firstname, " ", p.Lastname)
//         });
//     })
// })

// module.exports = conn




