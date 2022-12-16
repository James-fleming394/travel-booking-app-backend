const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Successful connection')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })
    mongoose.set('debug', true);


const db = mongoose.connection;

module.exports = db;