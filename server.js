const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/bookadoctor', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('connected', () => console.log('Connected to MongoDB.'));
db.on('error', (error) => console.log('Database connection error:', error));

// Import routes
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

app.listen(5000, () => console.log('Server running on port 5000.'));
