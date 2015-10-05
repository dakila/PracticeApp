(function () {
    'use strict';

    angular.module('employeeApp').controller('employeeListController', ['employeeStorage', constructor]);

    function constructor(employeeStorage) {
        var ls = employeeStorage;
        var vm = this;

        var employee = {
            id: null,
            firstName: null,
            middleName: null,
            lastName: null
        };

        vm.employees = [];

        vm.onInitialize = onInitialize;

        function onInitialize() {
            

            vm.employees = [
                {
                    id: '00001',
                    firstName: 'mikee',
                    middleName: 'bautista',
                    lastName: 'reyes',
                    role: 'Developer'
                },
                {
                    id: '00002',
                    firstName: 'aiach',
                    middleName: 'lb',
                    lastName: 'reyes',
                    role: 'Developer'
                }
            ];

            initEmployeeStorage();
        };

        function initEmployeeStorage() {
            var employeeLs = ls.employeeGet();

            if (employeeLs !== undefined && employeeLs !== null) {
                vm.employees.push(employeeLs);
                ls.employeeRemove();
            };
        }
    };
})();