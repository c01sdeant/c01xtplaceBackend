const mongoose = require('mongoose');
                 require('dotenv').config();

const mongoDBConnection = async _ => {
    const mongodbconnect = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    if (mongodbconnect) {
        console.log('db success');
    } else {
        console.log('db error');
    }
}

module.exports = mongoDBConnection;