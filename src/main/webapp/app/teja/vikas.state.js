(function() {
	'use strict';

	angular.module('tejaprojectApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('vikas', {
			parent : 'app',
			url : '/vikas',
			data : {
				authorities : [ 'ROLE_USER' ],
				pageTitle : 'VIKAS FORM'
			},
			views : {
				'content@' : {
					templateUrl : 'app/teja/vikas.html',
					controller : 'VikasController',
					controllerAs : 'vm'
				}
			}
		});
	}
})();
