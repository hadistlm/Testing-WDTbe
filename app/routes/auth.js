/**
 * Welcome Router.
 */

'use strict';

module.exports = function(app) {
	const auth = app.controllers.authController;
	
	app.get('/api/v1/login', auth.login);

	return app;
};