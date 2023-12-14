// contactController.js

const { Contact } = require('../models/userModel'); // Adjust the path accordingly

// Controller to handle contact-related operations
exports.createContact = async (req, res) => {
    try {
      
        const { name, lastName, phoneNumber, emailAddress, contents } = req.body;

        const newContact = new Contact({
            name,
            lastName,
            phoneNumber,
            emailAddress,
            contents,
        });

        const savedContact = await newContact.save();

        res.status(201).json(savedContact);
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
