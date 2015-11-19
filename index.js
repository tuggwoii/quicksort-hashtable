var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 4000));

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/example', express.static(__dirname + '/example'));

app.engine('html', require('ejs').renderFile);

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('*', function (request, response) {
    response.status(404).render('pages/404');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});