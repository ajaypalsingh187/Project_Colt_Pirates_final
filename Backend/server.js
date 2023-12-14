// server.js

const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/userRoute'); // Adjust the path accordingly
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(cors());

// Establish connection to MongoDB Atlas cluster
mongoose.connect('mongodb+srv://ajaypalsingh18794:9463021297aA@ajaydatabase.cvxnr8c.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('MongoDB connected');
    startServer(); // Start the server only when MongoDB connection is successful
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });


// Function to start the server
function startServer() {
  const PORT = 3001;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}




// Define the routes
app.use('/api', contactRoutes);


// Handling SIGINT to gracefully close the MongoDB connection when the server is stopped
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed.');
    process.exit(0);
  });
});
