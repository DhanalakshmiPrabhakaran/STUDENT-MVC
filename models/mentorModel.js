const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
    name: String,
    speciality: String,
});

module.exports = mongoose.model("mentors", MentorSchema);
