const mongoose = require('mongoose');


const conn =async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/blog')
    .then(async () => {
        console.log('MongoDB connected');   
    }).catch(err => console.error(err));
}

module.exports = conn;