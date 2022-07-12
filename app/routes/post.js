/**
 * post Router.
 */

'use strict';

module.exports = function(app) {
	const post = app.controllers.postController;
	
	app.get('/api/v1/post', post.postList);
	app.get('/api/v1/post/:slug_name', post.postDetail);

	return app;
};