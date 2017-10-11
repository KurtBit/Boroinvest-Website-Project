'use strict';

exports.login = function(args, res, next) {
  /**
   *
   * username String 
   * password String 
   * returns JwtToken
   **/
  var examples = {};
  examples['application/json'] = {
  "access_token" : "aeiou",
  "expires_at" : "aeiou",
  "token_type" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

