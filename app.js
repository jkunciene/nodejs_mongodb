require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = require('./config/db');
connectDB();