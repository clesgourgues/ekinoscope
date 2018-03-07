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

router.get('/:id', function(req, res, next) {
  const userClicked = users.find(user => user.id === req.params.id);
  res.json(userClicked);
})


module.exports = router;
