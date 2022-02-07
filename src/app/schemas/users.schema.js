const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
