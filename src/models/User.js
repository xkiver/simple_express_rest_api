const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String
    }, 
    name: {
        type: String
    }, 
    country: {
        type: String
    }
});

module.exports = model('User', UserSchema);
