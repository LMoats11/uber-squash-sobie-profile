const express = require('express');
require('dotenv').config();
const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;  

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
  
});

const mongoCollection = client.db("lukeSobieProfile").collection("lukeSobieBlog");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  let results = await mongoCollection.find({}).toArray();
  res.render('profile', { profileData: results });
});

app.post('/insert', async (req, res) => {
  await mongoCollection.insertOne({ title: req.body.title, post: req.body.post });
  res.redirect('/');
});

app.post('/update', async (req, res) => {
  await mongoCollection.findOneAndUpdate(
    { _id: new ObjectId(req.body.updateId) },
    { $set: { title: req.body.updateTitle, post: req.body.updatePost } }
  );
  res.redirect('/');
});

app.post('/delete', async (req, res) => {
  await mongoCollection.findOneAndDelete({ _id: new ObjectId(req.body.deleteId) });
  res.redirect('/');
});

app.listen(port, () => console.log(`Server running on localhost:${port}`));
