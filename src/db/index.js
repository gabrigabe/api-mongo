const mongoose = require('mongoose');
require('dotenv').config();

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(process.env.MONGODBCONNECTION);
  }
}

module.exports = new Database().connect();
