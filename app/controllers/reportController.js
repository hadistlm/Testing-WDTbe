/**
 * This is Auth Controller Handler
 */

'use strict';

const { faker, lodash } = MODULES;

module.exports = function(app) {
  
  this.reportIndex = function(req, res, next) {
    // prepare variable
    let result  = {
      'status': 'success',
      'message': 'success retrieved data',
      'data': {
        'new_post': lodash.random(4, 20),
        'new_post_percent': parseFloat(lodash.random(7.3, 10.9).toFixed(2)),
        'new_visitor': lodash.random(4000, 5000),
        'new_visitor_percent': parseFloat(lodash.random(20.5, 39.9).toFixed(2)),
        'new_comments': lodash.random(200, 300),
        'new_comments_percent': parseFloat(lodash.random(-7.3, 3.9).toFixed(2)),
        'latest_visitor': Array.from(Array(lodash.random(1, 10)).keys()).map((val, index) => {
          return {
            'id': (index+=1),
            'uuid': faker.datatype.uuid(),
            'username': faker.internet.userName(),
            'email': faker.internet.email(),
            'comments': lodash.random(1, 10),
            'avatar': faker.image.avatar()
          };
        })
      }
    };

    return res.status((result.status == 'success' ? 200 : 400)).json(result);
  };

  return this;
};