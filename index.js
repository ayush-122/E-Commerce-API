const express =require('express');
const app =express();
const port =process.env.PORT||5000;

//db import

const db =require('./config/mongoose');

//express router import
const router = require('./routes/index');

//to parse json request

app.use(express.json());



// use express router
 
 app.use('/', router);

app.listen(port, function(err){
    if(err)
     console.log(`error in starting server ,${err}`);
    else
        console.log(`server is running on port ${port}`);
});