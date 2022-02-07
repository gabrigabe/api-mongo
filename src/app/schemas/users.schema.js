const mongoose = require('mongoose');
const { hash } = require('bcrypt');

const UsersSchema = mongoose.Schema({
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

UsersSchema.pre('save', async function encrypt(next) {
  this.password = await hash(this.password, 10);
  return next();
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
