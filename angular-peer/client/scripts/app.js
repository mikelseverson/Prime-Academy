var myApp = angular.module('myApp',[]);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http) {
    $scope.note = {};
    $scope.heading = "Here is your message: ";
    $scope.names = [];

    $scope.getData = function() {
        $http.get('/data').then(function(response) {
            $scope.names = response.data;
            console.log($scope.names);
        })
    };

    $scope.updateMessage = function(note) {
        $http.post('/data', note).then($scope.getData());
    };
}]);