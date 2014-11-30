var appControllers = angular.module( 'AppControllers', []);

appControllers.controller( 'Partial1Controller', ['$scope', '$http', '$routeParams', 'ParseDatasService', 
	function( $scope, $http, $routeParams, ParseDatasService) {
		$scope.nb = 1;
		//Use "ParseDatasService" to parse json file
		$scope.datas = ParseDatasService.query();
		$scope.num = '-num';
	}
]);

appControllers.controller( 'Partial2Controller', ['$scope', 
	function( $scope) {
		$scope.nb = 2;
		var _name = '';
		$scope.user = {
			name: function( newName) {
				if( angular.isDefined(newName)) {
					_name = newName;
				}
				return _name;
			}
		};
	}
]);