const mongoose = require('mongoose');

const { Schema } = mongoose;

const notesSchema = new Schema({
    title: {
        type: String,
        required: true,
    }, // String is shorthand for {type: String}
    author: String,
    body: String,
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Notes", notesSchema);