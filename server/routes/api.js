const express = require('express');
const router = express.Router();

const offerController = require('../controllers/offerController');
const userController = require('../controllers/userController');

module.exports = (Users, Offers) => {
  router.use('/offer', offerController(Offers));
  router.use('/user', userController(Users));
  
  return router;
};