'use strict';

var url = require('url');

var Authentication = require('./AuthenticationService');

module.exports.login = function login (req, res, next) {
  Authentication.login(req.swagger.params, res, next);
};
