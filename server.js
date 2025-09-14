require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { connectDB, PORT } = require('./config/config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/api/students', require('./routes/students'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`🚀 Running on http://localhost:${PORT}`));
