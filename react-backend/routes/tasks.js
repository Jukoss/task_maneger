var express = require('express');
var jsonfile = require('jsonfile');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var file = '../data.json';

  var tasks = jsonfile.readFileSync(file);
  
  res.json(tasks);
});

router.post('/update', function(req, res, next) {

  var file = '../data.json';
  var tasks = jsonfile.readFileSync(file);

  tasks.map((item) => {
    if(item.id == req.body.id) {
      item.status = req.body.nextStep;
    }
  });

  jsonfile.writeFile(file, tasks, function(err) {
    console.error(err)
  });

  res.json(tasks);
});

router.get('/reset', function(req, res, next) {
  
  var file = '../data.json';
  var reset = '../reset.json';
  var tasks = jsonfile.readFileSync(reset);

  console.log(tasks);


  jsonfile.writeFile(file, tasks, function(err) {
    console.error(err)
  });

  res.json(tasks);
});

module.exports = router;