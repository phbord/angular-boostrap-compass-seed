var appAnimations = angular.module('AppAnimations', ['ngAnimate']);

appAnimations.animation('.myClass', function() {

});

var appControllers = angular.module( 'AppControllers', []);

appControllers.controller( 'Partial1Controller', ['$scope', '$http', 
	function( $scope, $http) {
		$scope.nb = 1;
		$http.get( './json/datas.json').success( function(data) {
			$scope.datas = data;
		});
	}
]);

appControllers.controller( 'Partial2Controller', ['$scope', 
	function( $scope) {
		$scope.nb = 2;
		var _name = '';
		$scope.user = {
			name: function(newName) {
				if (angular.isDefined(newName)) {
					_name = newName;
				}
				return _name;
			}
		};
	}
]);

app.directive( 'MyDirective', function() {
    return {
        restrict: 'E', //Element (Tag)
        templateUrl: 'partials/partial3.html'
    };
});

angular.module( 'AppFilters', []).filter( 'myFilter', function() {
	return function( arg) {
		return arg;
	};
});

var appServices = angular.module( 'AppServices', ['ngResource']);

appServices.factory( 'MyService', ['$resource',
	function( $resource) {
		
	}
]);