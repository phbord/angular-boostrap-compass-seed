var appConfig = app.config(['$routeProvider', 
	function( $routeProvider) {
		//Routes
		$routeProvider
			.when( '/', {
				templateUrl: 'partials/partial1.html',
				controller: 'Partial1Controller'
			})
			.when( '/page/2', {
				templateUrl: 'partials/partial2.html',
				controller: 'Partial2Controller'
			})
			.otherwise({
				redirectTo: '/'
			})
		;
	}
]);

var appConstant = app.constant( 
	'APP_CONSTANT', {
		'LANG': 'fr_FR'
	}
);
