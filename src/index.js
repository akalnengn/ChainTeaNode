// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Homepage Route
app.get('/', (req, res) => {
  res.send('Welcome to the ChainTeaNode Blockchain Interface!');
});

// Starting the Server
app.listen(port, () => {
  console.log(`ChainTeaNode is listening at http://localhost:${port}.`);
});
