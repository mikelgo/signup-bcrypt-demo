var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var router = express.Router();
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api",router);


router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/user').post(function(req, res) {
      var user = req.body.user;
      var pwHashed = bcrypt.hashSync(req.body.user.pw, salt);

      console.log(user);
      console.log("Original Password: " +req.body.user.pw);
      console.log("Hashed Password: "+ pwHashed + "Store this in your Database!");
      //res.json({ message: 'User created! ' +req.body.user});
    
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});