angular.module( 'AppFilters', []).filter( 'myFilter', function() {
	return function( arg) {
		return arg;
	};
});