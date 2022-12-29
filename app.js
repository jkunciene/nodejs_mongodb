require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const port = process.env.PORT || 4000;

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, ()=> console.log(`Server is running on port ${port}`));