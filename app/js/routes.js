app.config( ['$routeProvider',
	function( $routeProvider) {
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
			});
	}
]);