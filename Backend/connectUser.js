const { MongoClient } = require('mongodb');
const uri = "mongodb://0.0.0.0:27017";

async function insertDocument() {
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db('bt').collection('user');
  const res = await collection.insertOne({ a: 1, b: 2, name: 'Parth Godase' });
  if (res.acknowledged) {
    console.log(res.insertedId);
  } else {
    console.log('Error');
  }
  await client.close();
}

module.exports = { insertDocument };
