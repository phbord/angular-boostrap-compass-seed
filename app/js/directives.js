var appServices = angular.module( 'AppDirectives', ['ngResource']);

app.directive( 'MyDirective', function() {
	return {
		restrict: 'E', //Element (Tag)
		templateUrl: 'partials/partial3.html'
	};
});