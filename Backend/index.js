const express=require('express')
const { insertDocument } = require('./connectUser.js');
const cors= require('cors')
const app=express();

app.listen(8800,()=>
{
    console.log('server is listening on prt 8800')
})

app.use(cors);



async function main() {
  await insertDocument();
  console.log('Document inserted');
}

main();
