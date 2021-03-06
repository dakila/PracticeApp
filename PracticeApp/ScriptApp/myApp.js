﻿(function () {
    var myApp = angular.module('MyApp', ['ngMaterial']).controller('AppCtrl', constructor);

    function constructor ($scope, $timeout, $mdSidenav, $mdUtil, $log) {

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function () {
                $mdSidenav(navID)
                  .toggle()
                  .then(function () {
                      $log.debug("toggle " + navID + " is done");
                  });
            }, 200);

            return debounceFn;
        }
   };
})();