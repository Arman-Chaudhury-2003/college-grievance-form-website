const mongoose = require("mongoose");

const GrievanceSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Grievance", GrievanceSchema);
