const express = require('express')
const router = express.Router()
const con = require('../dat/mysqlconn')
const { error } = require('jquery')

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

router.get('/addpolicyholder', (req, res)=>{
    res.render('app/addPolicyholder')
})

router.post('/addpolicyholder', (req, res)=>{
    let title = req.body.title != null ? req.body.title : ''
    let firstname = req.body.firstname != null ? req.body.firstname : ''
    let lastname = req.body.lastname != null ? req.body.lastname : ''
    let age = req.body.age != null ? req.body.age : ''
    con.query(`INSERT INTO Policyholder(Title, Firstname, Lastname, Age)values('${title}','${firstname}','${lastname}','${age}')`,
        (error, result, fields)=>{
            if(error) throw error

            res.redirect('/app')
        })
    
})



router.get('/deletepolicyholder', (req, res)=>{
    res.render('app/deletePolicyholder')
})

// router.post('/deletepolicyholder')

router.get('/getph/:lastname', (req, res)=>{
    con.query(`SELECT * FROM Policyholder WHERE Lastname = '${req.params['lastname']}'`,
        (error, result, fields)=>{
            if(error) throw error

            if(result == typeof(Array)) res.end(JSON.stringify(result))

            res.end(result)
        })
})


module.exports = router