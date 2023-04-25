const { MongoClient } = require('mongodb');
const uri = "mongodb://0.0.0.0:27017";

async function insertDocument(doc) {
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db('bt').collection('new_user');
  const res = await collection.insertOne(doc);
  if (res.acknowledged) {
    console.log(res.insertedId);
  } else {
    console.log('Error');
  }
  await client.close();
}

module.exports = { insertDocument };
