appFilters = angular.module( 'AppFilters', []);

appFilters.filter( 'myFilter', function() {
	return function( arg) {
		return arg;
	};
});