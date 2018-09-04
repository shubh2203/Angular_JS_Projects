//Create a model
var app = angular.module('GreetAap',[]);

//Create a controller
app.controller('GreetAppCtrl',function ($scope) {
    $scope.time = null;
    $scope.greetMessage = '';
    $scope.getGreetMsg = function () {
        if ($scope.time === null){
            $scope.greetMessage = '';
        }else if ($scope.time <=12){
            $scope.greetMessage = 'Good Morning';
        }else if ($scope.time>12 && $scope.time <=17){
            $scope.greetMessage = 'Good Afternoon';
        }else if ($scope.time>17 && $scope.time <=24){
            $scope.greetMessage = 'Good Evening';
        }else {
            $scope.greetMessage = 'Enter proper Time';
        }
    }
});
