const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:4200/ecommerce';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log('Server running o port ${PORT'));

const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);