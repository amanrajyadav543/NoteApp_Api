const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     })
// }

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/notebook').on('open', ()=>{
    console.log("connection succesfull");
}).on('error', ()=>{
    console.log('nahi hua connection');
})
//module.exports= connection

module.exports = connection;