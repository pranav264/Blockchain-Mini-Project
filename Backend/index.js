const express=require('express')
const { insertDocument } = require('./connectUser.js');
const cors= require('cors')


const app=express();

app.use(cors());
app.use(express.json())

app.post("/addUser",(req,res)=>
{
   
    const Values=
      {
        name:'Parth',
        surname:'Godase',
        age:'20',
      }
    


    async function main() {
        await insertDocument(Values);
        console.log('Document inserted');
      }
      
      main();
   
})

app.get("/",(req,res)=>
{
    res.send('You are connected to backend!!!!!!!!!!!!!')
})



app.listen(8100,()=>
{
    console.log('server is listenong on port 8100')
})