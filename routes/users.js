var express = require('express');
var router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('./data/users.json');  
let users = JSON.parse(rawdata);  
console.log(users); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
