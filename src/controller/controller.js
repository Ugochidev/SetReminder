const Reminder = require("../model/reminder.model");
const mongoose = require("mongoose");

//  Adding a reminder

exports.addReminder = async (req, res, next) => {
  try {
    const { user, description, date } = req.body;
    if (!user || !description) {
      return res.status(400).json({
        message: "Please fill all  required field",
      });
    }

    const addReminder = new Reminder({
      user,
      description,
      date,
    });
    await addReminder.save();
    return res.status(201).json({
      addReminder,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// getting all reminder

exports.fetchReminder = async (req, res, next) => {
  try {
    const getReminder = await Reminder.find();
    return res.status(200).json({
      getReminder,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


// getting one reminder

exports.fetchSingleReminder = async (req, res, next) => {
  try {
    const { _id } = req.query;
    const singleReminder = await Reminder.findOne({_id});
   if (!_id) {
    return res.status(404).json({
    message: "ID not found",
    });
    }
    return res.status(200).json({
      singleReminder,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


// Updating a reminder

exports.updateReminder = async (req, res, next) => {
  try {
    const { _id } = req.query;
     const updateReminder = await Reminder.findOneAndUpdate({ _id }, req.body);
    return res.status(405).json({
      updateReminder,
      message :"deleting a reminder is allowed"
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


// deleting a reminder

exports.deleteReminder = async (req, res, next) => {
  try {
 const { _id } = req.params;
  const removeReminder = await Reminder.findOneAndDelete({ _id });
    return res.status(405).json({
      message: "deleting a reminder is allowed",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
