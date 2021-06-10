const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/api/apartments.js')

const app = express();
app.use('/', routes);

// Connect Database
connectDB();

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));