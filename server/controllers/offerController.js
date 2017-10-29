const express = require('express');
const router = express.Router();

module.exports = (Offers) => {
    router.post('/', (req, res) => {
        return Offers.create(req.body,
            (err, offer) => {
                if (err) {
                    console.log('Unable to create offer!');
                   
                    return  res.status(400).send(err);
                }
                
                return res.status(201).send(offer);
            });
    });

    router.get('/', (req, res) => {
        Offers.find({}, (err, offers) => {
          
            return  res.status(200).send(offers);
        })
    });

    router.delete('/:id', (req, res) => {
        return Offers.findByIdAndRemove(req.params.id, (err, offer) => {
            if (err) {
                console.log('Failed to deleting offer!');

                return res.status(404).send(offer);
            }
            
            return res.status(200).send(offer);
        })
    })

    router.get('/:id', (req, res) => {
        return Offers.findById(req.params.id, (err, offer) => {
            if (err) {
                console.log('Failed to find offer!');
    
                return res.status(404).send(err);
            }

            return  res.status(200).send(offer);
        })
    })

    router.put('/:id', (req, res) => {
        return Offers.findByIdAndUpdate(req.params.id, req.body, (err, offer) => {
            if(err) {
                console.log('Failed to find offer!');

                return res.status(204).send(err);
            }

            return res.status(200).send(offer);
        })
    });

    return router;
}