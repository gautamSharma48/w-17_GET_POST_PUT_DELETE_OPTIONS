const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  profile: { type: String, default: "" },
  address: { type: String, default: "" },
  email: { type: String, default: "" },
});

module.exports = mongoose.model('employee',empSchema);
