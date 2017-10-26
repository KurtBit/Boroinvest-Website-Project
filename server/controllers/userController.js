const express = require('express');
const router = express.Router();

module.exports = (Offers) => {
    router.post('/', (req, res) => {
        res.send('Added user');
    });

    return router;
}