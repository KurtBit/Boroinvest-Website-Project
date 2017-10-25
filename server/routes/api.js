const express = require('express');
const router = express.Router();

module.exports = (Users, Offers) => {

  router.get('/user', (req, res) => {
    // return Users.create({
    //   username: "elitsa",
    //   password: "123",
    //   created_at: new Date()
    // }, (err, user) => {
    //   if (err) return console.log('Unable to create user!');

    //   res.send(user);
    // });
  });

  /* GET api listing. */
  router.get('/', (req, res, unitOfWork) => {
    res.send('api works');
  });

  return router;
};