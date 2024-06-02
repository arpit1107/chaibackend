require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
  res.send("hello world");
})

app.listen(PORT,(error)=>{
  if(!error){
    console.log(`server is runing at ${PORT}`);
  }else{
    console.log("Error: server is not started!!!");
  }
})