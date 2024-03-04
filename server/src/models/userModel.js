const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    userEmail: {
        type: String
    }
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;