const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Same: const { Schema } = mongoose;

//
const userSchema = new Schema ({
    googleId: String,
    fullName: String
});

mongoose.model('users', userSchema);
