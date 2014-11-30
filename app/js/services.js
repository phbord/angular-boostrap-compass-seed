var appServices = angular.module( 'AppServices', ['ngResource']);

appServices.factory( 'ParseDatasService', ['$resource',
	function( $resource) {
		return $resource('./json/datas.json', {}, {
			query: { method: 'GET', params: { datas: 'datas' }, isArray:true }
		});
	}
]);