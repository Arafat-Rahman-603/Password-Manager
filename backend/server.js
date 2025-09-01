const express = require('express');
const app = express();
const port = 3000;
const {MongoClient} = require('mongodb')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
dotenv.config();
const cors = require('cors');
app.use(cors());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
app.use(bodyParser.json());

const dbName = 'passworld-manager';

client.connect();

app.use(express.json());

app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});



app.post('/', async(req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
  const findResult = await collection.insertOne(password);
  res.send({success: true,result: findResult});
});



app.delete('/', async(req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
  const findResult = await collection.deleteOne(password);
  res.send({success: true,result: findResult});
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
