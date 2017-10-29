const express = require('express');
const router = express.Router();

module.exports = (Users) => {
    router.post('/', (req, res) => {
        return Users.create(req.body,
            (err, user) => {
                if (err) {
                    console.log('Unable to create user!');

                    return   res.status(400).send(err);
                }

                return res.status(201).send(user);
            });
    });

    router.get('/', (req, res) => {
        Users.find({}, (err, users) => {
            return res.status(200).send(users);
        })
    });

    router.delete('/:id', (req, res) => {
        return Users.findByIdAndRemove(req.params.id, (err, user) => {
            if (err) {
                console.log('Failed to deleting user!');

                return res.status(404).send(err);
            }
            
            return  res.status(200).send(user);
        })
    })

    router.get('/:id', (req, res) => {
        return Users.findById(req.params.id, (err, user) => {
            if (err) {
                console.log('Failed to find offer!');

                return res.status(404).send(err);
            }

            return res.status(200).send(user);
        })
    })

    router.put('/:id', (req, res) => {
        return Users.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            if(err) {
                console.log('Failed to find user!');

                return res.status(204).send(err);
            }

            return res.status(200).send(user);
        })
    });


    return router;
}