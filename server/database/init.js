const mongoose = require('mongoose');
const schema = require('./schema');

const port = 33895;
const username = 'admin';
const password = 'Svetlio78';

const connection =
  `mongodb://${username}:${password}@ds233895.mlab.com:${port}/boroinvest`;

mongoose.connect(connection, {
  useMongoClient: true
});

mongoose.connection
  .on('error', console.error.bind(console, 'MongoDB connection error:'));

let {users, offers} = schema(mongoose).compile();

module.exports = {
  users,
  offers
};