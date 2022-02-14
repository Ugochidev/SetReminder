const express = require("express");
const Reminder = require("../controller/controller");
const router = express.Router();
router.post("/addReminder", Reminder.addReminder);
router.get("/fetchReminder", Reminder.fetchReminder);
router.get("/fetchSingleReminder",Reminder.fetchSingleReminder);
router.patch("/updateReminder", Reminder.updateReminder);
router.delete("/deleteReminder", Reminder.deleteReminder);
module.exports = router;
