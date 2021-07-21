const mongoose = require('mongoose');
require('dotenv').config();
const DB_URL = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('MongoDB Connected');
    }
    catch(err) {
        console.error(err.msg);
        process.exit(1);
    }  
};

module.exports = connectDB;