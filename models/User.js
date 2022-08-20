const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 6,
        max: 255   
    },

    email: {
        type: String,
        min: 6,
        max: 255   
    },

    password: {
        type: String,
        min: 8,
        max: 1024   
    },

});

userSchema.plugin(findOrCreate);
 
module.exports = mongoose.model('User', userSchema);