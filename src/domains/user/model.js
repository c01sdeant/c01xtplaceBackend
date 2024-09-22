const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String},

    userFirstName: {type: String},
    userLastName: {type: String},
    userEmail: {type: String},
    userNickname: {type: String}

}, {timestamps: true});

const loginSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String},
    token: {type: String}
}, {timestamps: true});

const userSchemaExport = mongoose.model('user', userSchema, 'users');

const loginSchemaExport = mongoose.model('login', loginSchema, 'logins');

module.exports = {
    userSchemaExport,
    loginSchemaExport
}