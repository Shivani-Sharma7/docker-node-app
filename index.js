var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/index.html', function (req, res) {
   res.sendFile(__dirname + "/" + "index.html" );
})

app.post('/submit_form', urlencodedParser, function (req, res) {
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.user_email
   };

   //This will print the output on console...
   console.log(req.body);
   res.end(JSON.stringify(response));
})

app.listen(3000);