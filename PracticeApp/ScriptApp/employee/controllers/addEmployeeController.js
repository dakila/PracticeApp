(function () {
    'use strict';

    angular.module('employeeApp').controller('addEmployeeController', ['$state', 'employeeStorage', constructor]).config(['$mdThemingProvider', initConfig])

    function constructor($state, employeeStorage) {
        var ls = employeeStorage;
        var vm = this;

        vm.employee = {
            firstName: null,
            middleName: null,
            lastName: null,
            role: null
        };

        vm.onAdd = onAdd;

        function onAdd() {
            ls.employeeSet(vm.employee);
            $state.go('list');
        };
    };

    function initConfig($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('blue')
            .dark();
    };
})();