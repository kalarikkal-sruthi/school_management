
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config();
const app = express();
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb connected")
    
})
.catch((error)=>{
    console.log("MongoDb Connection Error",error);
    
})
app.get('/',(req,res)=>{
    res.send('hello how are you')
});
app.get('/about',(req,res)=>{
    res.send('/about')
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
 console.log(`the server running app like ${PORT}`);
 
})

