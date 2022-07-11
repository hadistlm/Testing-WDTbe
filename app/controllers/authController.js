/**
 * This is Auth Controller Handler
 */

'use strict';

const { moment } = MODULES;

module.exports = function(app) {
  
  this.login = function(req, res, next) {
    let result = {};

    if (req.body.username === 'dadan@mail.com' && req.body.password === 'dadan123') {
      result = {
        'status' : 'success',
        'message': "Hi Dadan Ramdana, access was granted",
        'token': "7afaacf9f6272cd960a5864d6eaba7a8",
        'token_type': "Bearer",
        'expired_at': moment().add(2, 'hours').format('YYYY-MM-DD HH:mm:ss'),
        'user': {
          'id': "8",
          'uuid': 'be7a3ed9-6b90-4fb2-a2aa-134e6aa4b7ea',
          'displayname': 'Dadan Ramdana',
          'username': 'dadanroot',
          'email': 'dadan@mail.com',
          'last_login': moment().subtract(2, 'hours').format('YYYY-MM-DD HH:mm:ss'),
          'role_id': 1
        }
      };
    }
    else{
      result = {
        'status' : 'failed',
        'message': 'user not found!'
      };
    }

    return res.json(result);
  };

  return this;
};