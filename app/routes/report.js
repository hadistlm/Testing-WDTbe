/**
 * post Router.
 */

'use strict';

module.exports = function(app) {
	const post = app.controllers.reportController;
	
	app.get('/api/v1/report/dashboard', post.reportIndex);

	return app;
};