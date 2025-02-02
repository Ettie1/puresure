const express = require('express');
const session =require('express-session')
const router = express.Router();
const mysql = require('mysql')
require('dotenv').config()
const app = express()

//const mycss = require('bootstrap')
//app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(session({ 
    secret: 'secret',
    resave: true,
    saveUninitialized: true
 }))


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

router.get('/', (req, res)=>{
    //console.log(req.params.username);
    console.log("before")
    console.log(process.env)
    console.log("after")
    res.render('loginsignup/login', {logmsg:''});
})

router.post('/', (req, res)=>{
    console.log('Posting...')
    con.query(`SELECT * FROM User WHERE Username = '${req.body.username}'`, (error, result, fields)=>{
        if(error){
            console.error(error)
        }
        if(result <= 0)
        {
            res.render('loginsignup/login', {logmsg: 'User not found.'})    
        }
         

        const suser = JSON.stringify(...result)
        const auser = JSON.parse(suser)
        if(auser.Password == req.body.password)
        {
            var message = "Pure - Clear Insurance - Pure Assurance - Peace of mind - Parts insurance - Quick and easy cover";
            res.render('pure', {loggeduser: `Welcome back ${ auser.Username}`, msg: message})
        }

        res.render('loginsignup/login', {logmsg:'Invalid username or password'})
        
    

    })

    
})

router.get('/logsignopt', (req, res)=>{
    res.render('loginsignup/logsignopt')
})

router.get('/signup', (req, res)=>{
    res.render('loginsignup/signup')
})

module.exports = router;