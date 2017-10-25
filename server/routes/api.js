const express = require('express');
const router = express.Router();

module.exports = (Users, Offers) => {

  router.post('/offer', (req, res) => {

    let offer = req.body;
    // if (!offer) {
    //   res.status(400);
    //   return res.send();
    // }

    return Offers.create(offer,
      (err, user) => {
        if (err) return console.log('Unable to create user!');

        res.status(201);
        res.send(user);
      });
  });

  /* GET api listing. */
  router.get('/', (req, res, unitOfWork) => {
    res.send('api works');
  });

  return router;
};