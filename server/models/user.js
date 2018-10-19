const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  }
});

// Create model with name and schema
mongoose.model('users', userSchema);
