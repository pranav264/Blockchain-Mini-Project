const express=require('express')
const { insertDocument } = require('./connectUser.js');
const cors= require('cors')
const app=express();

app.listen(8800,()=>
{
    console.log('server is listening on prt 8800')
})

app.use(cors);


app.post("/addUser",(req,res)=>
{
    const q="INSERT INTO books(`title`,`desc`,`price`,`cover`) VALUES (?)"
    const Values=[
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];


    async function main() {
        await insertDocument(Values);
        console.log('Document inserted');
      }
      
      main();
   
})




