const http      = require('http'),
      express   = require('express'),
      path      = require('path')
      app       = express(),
      fs        = require('fs'),
      testCafe  = require('testcafe');

let port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './public');

app.set('port', port);

app.get('/', (req, res) => {
  let locals = {
    section: 'home'
  };
  
  res.render('index', locals);
});

http.createServer(app).listen(app.get('port'), () => {
  console.log('app listening on: ' + app.get('port'));
});