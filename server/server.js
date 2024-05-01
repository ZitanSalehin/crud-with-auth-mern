
const express = require('express');

const connectToDB = require('./config/connectToDB');


// create an express app
const app = express();

connectToDB();


// routing
app.get('/', (req,res)=>{
    res.json({msg:"hello world"})
})

// starting server
app.listen(parseInt(process.env.PORT));

// because process.env.PORT is typically a string. You can achieve this by using the parseInt() function. Here's the corrected line:
// app.listen(parseInt(process.env.PORT));