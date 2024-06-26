const express = require('express');
const path = require('path');

const app = express();

// Define the directory where your static files are located
const publicDirectoryPath = path.join(__dirname, 'public');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
