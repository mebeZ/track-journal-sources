const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('../data');
const sources = data.sources;

const sourceEntry = new Schema({
    id: Number,
    name: String,
    email: String,
});

const sourceModel = mongoose.model('Source', sourceEntry); // source is a class

const dbSources = sources.map(source => {
    (new sourceModel(source)).save();
}) // create document for each source object

module.exports = dbSources;



