const express = require('express');
const db = require('./data/db');
const server = express();

server.get('/', (req, res) => {
    res.send('Hello Express')
})

server.get('/api/posts', (req, res) => {
    db.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

module.exports = server;    