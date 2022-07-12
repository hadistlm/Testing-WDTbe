/**
 * This is Auth Controller Handler
 */

'use strict';

const { moment, faker, lodash } = MODULES;

module.exports = function(app) {
  
  this.postList = function(req, res, next) {
    // prepare variable
    let articles = [];
    let page     = req.query.page ? parseInt(req.query.page) : 1;
    let perpage  = req.query.perpage ? parseInt(req.query.perpage) : 10;

    if (!page || page <= 2) {
      let indexNumber = (page * perpage) - perpage;
      let arrayLength = 20 - indexNumber;

      Array.from(Array(arrayLength).keys()).forEach((val, index) => {
        let title = faker.lorem.words(8);

        articles = [...articles, {
          'id': indexNumber+=1,
          'uuid': faker.datatype.uuid(),
          'title': title,
          'slug': faker.helpers.slugify(title),
          'body': faker.lorem.paragraphs(8),
          'image': faker.image.people(),
          'category': faker.commerce.department(),
          'created_by': 'Dadan Ramdana',
          'created_date': moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
          'last_edited': moment(faker.date.recent()).format('YYYY-MM-DD HH:mm:ss')
        }];
      });
    }

    const result = {
      'status': page <= 2 ? 'success' : 'failed',
      'message': page <= 2 ? 'blog post list retrieved' : 'data is empty',
      'paginate': {
        'page': page,
        'perpage': perpage,
        'total': 20,
        'total_pages': Math.ceil(20 / perpage)
      },
      'data': articles
    };

    return res.status((result.status == 'success' ? 200 : 400)).json(result);
  };

  this.postDetail = function(req, res, next) {
    let slugName = req.params.slug_name;

    return res.json({
      'status': 'success',
      'message': 'post detail retrieved',
      'data': {
        'id': lodash.random(1, 20),
        'uuid': faker.datatype.uuid(),
        'title': slugName.replace(/-/g, ' ')
          .toLowerCase()
          .replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function(s){ 
            return s.toUpperCase(); 
          }
        ),
        'slug': slugName,
        'body': faker.lorem.paragraphs(8),
        'image': faker.image.people(),
        'category': faker.commerce.department(),
        'comments': Array.from(Array(lodash.random(1, 10)).keys()).map((val, index) => {
          return {
            'id': (index+=1),
            'uuid': faker.datatype.uuid(),
            'username': faker.internet.userName(),
            'comment': faker.random.words(),
            'posted_date': moment(faker.date.recent()).format('YYYY-MM-DD HH:mm:ss')
          };
        }),
        'created_by': 'Dadan Ramdana',
        'created_date': moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
        'last_edited': moment(faker.date.recent()).format('YYYY-MM-DD HH:mm:ss')
      }
    });
  };

  return this;
};