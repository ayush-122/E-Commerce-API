const mongoose =require('mongoose');

mongoose.connect("mongodb+srv://ayushsingh4045:DeXlSENxzhapXyO8@cluster0.ji0rway.mongodb.net/ECommerceAPI?retryWrites=true&w=majority");

const db =mongoose.connection

db.on('error',console.error.bind(console, 'error connecting to database'));


db.once('open',function()
{
    console.log('Connected to database :: MongoDB');
})

module.exports=db;

