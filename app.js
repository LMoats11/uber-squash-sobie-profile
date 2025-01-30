const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;  
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

//console.log(uri);


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

//Create a MONGOClient with a MongoClientOptions object to set the Stable API version
 const client = new MongoClient(uri, {
  serverApi: {version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,  }
 });

 async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

//run().catch(console.dir);

async function getData() {
  
  await client.connect();
  let collection = await client.db("sobie-profile-database").collection("sobie-profile");

  
  let results = await collection.find({}).toArray();
   

 // res.send(results).status(200);
  //.limit(50)
  //.toArray();
  console.log(results);

  return results;

}

getData();

app.get('/read', async function (req, res) {
  let getDataResults = await getData();
  console.log(getDataResults);
  res.send('songs', 
  { songData : getDataResults} );
})

//begin all my middlewares


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.post('/saveMyName', (req, res)=>{
  console.log('did we hit the endpoint??');

  console.log(req.body);

  res.redirect('/ejs');
});

app.post('/saveMyName', (req, res)=>{
  console.log('did we hit the endpoint??');

  console.log(req.query);

  res.render('words', 
  {pageTitle: req.body.myName});
  

  
}); 



app.get('/ejs', async (req, res) => {

  await client.connect();
  let result = await client.db("lukes-db").collection
  ("whatever-collection").find({}).toArray();

  console.log(result);

  res.prependListener('index', {
    ejsResult : result
  });
});


app.get('/nodemon', function (req, res) {
  res.send('look ma, no kill node process then restart node then refresh browser...cool?');

});

//endpoint, middleware(s)
// app.get('/helloRender', function (req, res) {
//   res.send('Hello Express from Real World<br><a href="/">back to home</a>')
// })

app.listen(
  port, 
  ()=> console.log(
    `server is running on ... ${port}`
    )
  );