// let data = require('../data.js');
const dbSources = require('../models/SourceModel'); 

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    sendSource: (req, res) => {
        res.json(dbSources);
    },
    addSource: (req, res) => {
        data.sources.push(req.body); // parse req.body json to javascript object then push object to sources array
        res.json(data);
    },
    deleteSource: (req, res) => {
        const id = req.params.id;
        data = data.sources.filter(source => source.id !== id);
        res.json(data);
    }
};

