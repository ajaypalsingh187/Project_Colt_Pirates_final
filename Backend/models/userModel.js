// userModel.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    contents: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = { Contact };
