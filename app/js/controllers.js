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