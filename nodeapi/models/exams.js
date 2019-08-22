const mongoose = require("mongoose");

const examsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    postedBy: {
        type: String,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
});

module.exports = mongoose.model("Exams", examsSchema);
