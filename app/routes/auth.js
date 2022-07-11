/**
 * Welcome Router.
 */

'use strict';

module.exports = function(app) {
	const auth = app.controllers.authController;
	
	app.post('/api/v1/login', auth.login);
	app.post('/api/v1/logout', auth.logout);

	return app;
};