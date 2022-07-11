/**
 * Welcome Router.
 */

'use strict';

module.exports = function(app) {
	const auth = app.controllers.authController;
	
	app.post('/api/v1/login', auth.login);

	return app;
};