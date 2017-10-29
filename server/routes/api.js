const express = require('express');
const router = express.Router();

const offerController = require('../controllers/offerController');
const userController = require('../controllers/userController');

module.exports = (Users, Offers) => {
  router.use('/offers', offerController(Offers));
  router.use('/users', userController(Users));
  
  return router;
};