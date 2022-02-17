const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  reminderSchema = new Schema({
  user: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  },
  {
timestamps: true
  })
  
const reminderModel = mongoose.model("Reminder", reminderSchema);


module.exports = reminderModel

  module.export