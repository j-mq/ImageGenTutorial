const express = require('express');
const env = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => console.log(`Server is running on port ${port}`));
