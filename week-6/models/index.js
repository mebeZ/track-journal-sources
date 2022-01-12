const mongoose = require('mongoose');
const config = require('../config');

const URI = config.URI;

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Mongo DB connected at ${URI}'))
    .catch((e) => console.log('Failed to connect to MongoDB', e.message));

const db = mongoose.connection;

module.exports = db;