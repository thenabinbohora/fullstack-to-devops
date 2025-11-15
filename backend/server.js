// 1️Import Express
const express = require('express');

// Create an Express app
const app = express();

// Enable JSON parsing for requests
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('🎬 Welcome to Movie API Server');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
