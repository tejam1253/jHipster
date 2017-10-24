(function() {
    'use strict';

    angular
        .module('tejaprojectApp')
        .controller('VikasController', VikasController);

    VikasController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function VikasController ($scope, Principal, LoginService, $state) {
        var vm = this;

    }
})();
