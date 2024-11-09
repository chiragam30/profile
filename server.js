const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Default route to load the portfolio
app.get('/', (req, res) => {
  const filePath = 'D:\\MyProject\\Portfolio-Website-Template-main\\index.html'; // Use the correct absolute path
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(err.status).end();
    } else {
      console.log(`File served: ${filePath}`); // Log the file path after it's served
    }
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
