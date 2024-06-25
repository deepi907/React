// Require necessary modules
const express = require('express');
require('dotenv').config(); // Load environment variables from .env file

// Create Express app
const app = express();
const port = process.env.PORT || 3001; // Set port to 3001 by default if not specified in .env

// Serve static files (optional, if you have a frontend)
app.use(express.static('public'));

// Route to serve progress bar
app.get('/progress', (req, res) => {
  const { percent } = req.query;
  if (!percent) {
    return res.status(400).send('Percent parameter is required');
  }

  // Validate percent (optional)
  const percentValue = parseFloat(percent);
  if (isNaN(percentValue) || percentValue < 0 || percentValue > 100) {
    return res.status(400).send('Percent must be a number between 0 and 100');
  }

  // Calculate width for the progress bar
  const progressBarWidth = `${percentValue}%`;

  // Return the progress bar HTML
  const progressBarHTML = `
    <div style="width: 100%; height: 20px; background-color: lightgrey; border-radius: 5px;">
      <div style="width: ${progressBarWidth}; height: 100%; background-color: green; border-radius: 5px;"></div>
    </div>
  `;
  res.send(progressBarHTML);
});

// Disable default 'hello world' route
app.get('/', (req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
