(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController ($scope) {
        $scope.lunch = {
            items: '',
            message: ''
        };
        
        $scope.checkItems = function () {
            var userInput = $scope.lunch.items;
            if (userInput === '') {
                $scope.lunch.message = 'Please enter data first';
            } else {
                var arrItems = userInput.split(',');
                if (arrItems.length <= 3) {
                    $scope.lunch.message = 'Enjoy!';
                } else {
                    $scope.lunch.message = 'Too much!';
                }
                //console.log(arrItems);
            }
        };
    }
})();