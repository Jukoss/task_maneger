var express = require('express');
var jsonfile = require('jsonfile')


var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var file = '../data.json';
  
  var tasks = jsonfile.readFileSync(file);

  var taskTitle = tasks.map((item) => {
      return item.title;
  });

  taskTitle.unshift("New Project");
  
  res.json(taskTitle);
});

router.post('/', function(req, res) {
  // Comment out this line:
  
  console.log(req.body);

  var file = '../data.json';

  var tasks = jsonfile.readFileSync(file);

  tasks.push(req.body);
  jsonfile.writeFile(file, tasks, function(err) {
    console.error(err)
  });


});

module.exports = router;