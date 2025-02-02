var express = require('express');
var router = express.Router();
//const mycss = require('bootstrap')

/* GET home page. */
router.get('/', function(req, res, next) {


  var message = "Pure - Clear Insurance - Pure Assurance - Peace of mind - Parts insurance - Quick and easy cover";

  if(req.session.loggedin)
  {
    res.render('pure', { msg: message, loggeduser: `Welcome back ${req.session.username}`});
  }
  res.render('pure', { msg: message, loggeduser: ''});
});



module.exports = router;
