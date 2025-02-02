const express = require('express')
const router = express.Router()
const con = require('../dat/mysqlconn')

router.get('/', (req, res)=>{
    res.render('app/phmenu')
})

router.get('/policyholders', (req, res)=>{
    con.query("SELECT * FROM Policyholder", (error, result, fields)=>{
        if(error) throw error

        const strDat = JSON.stringify(result);
        const jDat = JSON.parse(strDat)
        res.render('app/policyholders', {appDat: jDat})
    })
    
})

module.exports = router