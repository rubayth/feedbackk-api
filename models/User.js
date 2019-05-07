const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    userName: String,
    profilePic: String
});

mongoose.model('users', userSchema);