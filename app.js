const expresss = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(_dirname + '/public'))

app.get('/', function (req, res) {
  res.sendFile('index.html')
           })


//endpoint, middleware(s)
  app.get('/helloRender', function (req, res) {
    res.send
  })
