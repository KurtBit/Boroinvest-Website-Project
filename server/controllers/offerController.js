const express = require('express');
const router = express.Router();

module.exports = (Offers) => {
    router.post('/', (req, res) => {
        let offer = req.body;

        return Offers.create(offer,
            (err, user) => {
                if (err) return console.log('Unable to create user!');

                res.status(201);
                res.send(user);
            });
    });

    router.get('/', (req, res) => {
        Offers.find({}, (err, offers) => {
            if (err) return console.log('Unable to create offer!');

            res.status(200);
            res.send(offers);
        })
    });

    router.delete('/:id', (req, res) => {
        return Offers.findByIdAndRemove(req.params.id, (err, offer) => {
            if (err) console.log('Failed to deleting offer!', offer);

            res.status(200);
            res.send();
        })
    })

    return router;
}