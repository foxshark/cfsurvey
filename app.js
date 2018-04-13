var express = require('express');
 
var app = express();
var router = express.Router();
var path = __dirname + 'resources/views/';

app.set('views', './resources/views');
app.set('view engine', 'jade');


app.get('/', function(req, res) {
	res.render('survey', {
		title: 'Demo Survey'
	});  
});

app.post('/demo', function(req, res) {
	//simulatd functionality
  	res.send(req.body);
});

app.use(express.static(__dirname + '/public'));
 
app.listen(8088,function(){
  console.log("Live at Port 8088");
});