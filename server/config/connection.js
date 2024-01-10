const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/nicole_portfolio"
);

module.exports = mongoose.connection;