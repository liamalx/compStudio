const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017';
const dbName = 'food';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err);

  const db = client.db(dbName);
  console.log(`Connected to ${dbName} database`);

  app.post('/add-food', (req, res) => {
    const collection = db.collection('items');
    const { upc, quantity } = req.body;

    collection.insertOne({ upc, quantity }, (err, result) => {
      if (err) return console.log(err);
      console.log(`Added ${upc} to database with quantity ${quantity}`);
      res.send({ success: true });
    });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
