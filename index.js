var express = require('express');
var parse = require('parse');
var data = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 9000));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(data.json())
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/example', express.static(__dirname + '/example'));
app.engine('html', require('ejs').renderFile);

app.get('/', function(request, response) {
	response.render('pages/index');
});

app.post('/login', function(request, response) {
	console.log(request.body);
	response.render('pages/index');
});

app.get('*', function (request, response) {
    response.status(404).render('pages/404');
});

app.post('*', function (request, response) {
    response.status(404).render('pages/404');
});

app.listen(app.get('port'), function() {
  console.log('parse running on port', app.get('port'));
});