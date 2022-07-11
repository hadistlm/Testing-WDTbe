/**
 * This is Users Controller Handler
 */

'use strict';

module.exports = function(app) {
  
  var models = app.settings.models;

  this.getAll = async function(req, res, next) {
    var users = await models.User.findAll();
    return res.json(users);
  };

  return this;
};