const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./server/database/init');
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/dist'));

// Set our api routes
app.use('/api/v1', api(db.users, db.offers));

// Catch all other routes and return the index file
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 8080;

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
    console.log(`Angular running on localhost:${port}`);
    console.log(`API running on localhost:${port}/api`);
});
