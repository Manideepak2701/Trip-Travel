const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://deepak:kinna2004@cluster0.chjgd43.mongodb.net/travel'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose