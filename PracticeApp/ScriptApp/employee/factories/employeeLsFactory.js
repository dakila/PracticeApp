(function () {
    'use strict';

    angular.module('employeeApp').factory('employeeStorage', ['localStorageService', constructor]);

    function constructor(localStorageService) {
        var ls = localStorageService;
        var key = 'employee';

        function employeeSet(value) {
            ls.set(key, value);
        };

        function employeeGet() {
            return ls.get(key);
        };

        function employeeRemove() {
            return ls.remove(key);
        };

        return {
            employeeSet: employeeSet,
            employeeGet: employeeGet,
            employeeRemove: employeeRemove
        };
    };
})();