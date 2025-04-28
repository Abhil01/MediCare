const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  relativeEmail: { type: String }, // Email of relative to notify
});

module.exports = mongoose.model('User', UserSchema);
