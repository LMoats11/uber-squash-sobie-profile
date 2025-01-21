const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.sendFile('index.html')
           })


//endpoint, middleware(s)
  app.get('/helloRender', function (req, res) {
    res.send
  })

  app.get('/nodemon', function (req, res) {
    res.send('here it be');
  })

  app.get('/ejs', function (req, res) {
    res.render('Great Heavens', 
    {pageTitle: 'my cool ejs page'}
  );
  })

app.listen(
    port, 
    ()=> console.log(
      `server is running on ... ${port}`
      )
    );
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.sendFile('index.html')
           })

app.set('view engine', 'ejs');

//endpoint, middleware(s)
  app.get('/helloRender', function (req, res) {
    res.send
  })

  app.get('/nodemon', function (req, res) {
    res.send('here it be');
  })

  app.get('/ejs', function (req, res) {
    res.render('Great Heavens', 
    {pageTitle: 'my cool ejs page'}
  );
  })
