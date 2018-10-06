const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  googleId: String
});

// Create model with name and schema
mongoose.model('users', userSchema);
