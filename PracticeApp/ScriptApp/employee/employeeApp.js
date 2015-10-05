(function () {
    'use strict';

    angular.module('employeeApp', ['ngMaterial', 'ngMessages', 'LocalStorageModule', 'ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', initProvider]);

    function initProvider($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/Employee/List");

        $stateProvider.state('list', {
            url: "/Employee/List",
            templateUrl: "Employee/List"
        }).state('add', {
            url: "/Employee/Add",
            templateUrl: "Employee/Add"
        });
    };
   
})();