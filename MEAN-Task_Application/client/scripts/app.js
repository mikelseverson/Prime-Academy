var myApp = angular.module('taskApp',[]);

myApp.controller("taskController", ['$scope', '$http', function($scope, $http) {
    $scope.heading = "Angular Task Application";
    $scope.updateTasks = function() {
        $http.get("/tasks").success(function(data) {
            $scope.tasks = data;
        });
    };
    $scope.sendTask = function() {
        $http.post("/tasks/create", {task : $scope.taskInput}).success(function(data) {
            $scope.tasks.unshift(data);
        });
    };
    $scope.deleteTask = function(taskId) {
        $http.delete("/tasks/" + taskId + "/delete").success(function(){
            $scope.updateTasks();
        });
    };
    $scope.updateTaskStatus = function(taskId, status) {
        $http.put("/tasks/" + taskId + "/swap-status", { completed : status }).success( function(){
            $scope.updateTasks();
        })
    };
    $scope.updateTasks();
}]);
