import dotenv from "dotenv";
import connect_db from "./db/index.js";
// import { app } from "./index.js";
import { app } from "./app.js";
dotenv.config({
  path: './env'
})

const PORT = process.env.PORT || 8000;

connect_db()
.then(() => {
  app.listen(PORT,(error) => {
    if(!error){
      console.log(`Server is running on ${PORT}`);
    }else{
      console.log("Server Error",error);
    }
  })
})
.catch((error) => {
  console.log("Error is DB Connection",error);
})








// require('dotenv').config();
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT;

// app.get('/',(req,res)=>{
//   res.send("hello world");
// })

// app.listen(PORT,(error)=>{
//   if(!error){
//     console.log(`server is runing at ${PORT}`);
//   }else{
//     console.log("Error: server is not started!!!");
//   }
// })