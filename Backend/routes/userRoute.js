// contactRoutes.js

const express = require('express');
const { createContact } = require('../controllers/userController');
const router = express.Router();

// Define routes for contacts
router.post('/contacts',createContact);


// Define a route for the root URL
router.get('/', (req, res, next) => {
    res.send('Hello, World!');
    next();
});



module.exports = router;
