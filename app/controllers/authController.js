/**
 * This is Auth Controller Handler
 */

'use strict';

module.exports = function(app) {
  
  this.login = function(req, res, next) {
    return res.json({
      'status': 200,
      'message': 'success'
    });
  };

  return this;
};