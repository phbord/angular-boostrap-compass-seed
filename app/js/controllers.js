var appControllers = angular.module( 'AppControllers', []);

appControllers.controller( 'SystemLanguagesController', ['$scope', '$http', '$cookies', 
	function( $scope, $http, $cookies) {
		$scope.setLanguage = setLanguage;
		$http.currentLang = '';

        function setLanguage( lang) {
            $cookies.__APPLICATION_LANGUAGE = lang;
        }
        function init() {
            var lang = $cookies.__APPLICATION_LANGUAGE || APP_CONSTANT.LANG;
            $http.currentLang = lang;
            setLanguage(lang);
        }
        init();
	}
]);

appControllers.controller( 'DatasController', ['$scope', '$http', 'APP_CONSTANT', '$cookies', 
	function( $scope, $http, APP_CONSTANT, $cookies) {
		//Get default or new language
        var lang = $cookies.__APPLICATION_LANGUAGE || APP_CONSTANT.LANG;

        //Json file parsing
		$http({ method: 'POST', url: './json/datas-'+lang+'.json' })
			.success( function( data) {
				$scope.datas = data;
				$scope.num = '-num';
			}
		);
	}
]);

appControllers.controller( 'Partial1Controller', ['$scope', 
	function( $scope) {
		//Set variable
		$scope.nb = 1;
	}
]);

appControllers.controller( 'Partial2Controller', ['$scope', 
	function( $scope) {
		//Set variable
		$scope.nb = 2;

		//Get values
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