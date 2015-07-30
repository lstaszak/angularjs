'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];
    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);
    $scope.addTodo = function () {
      if ($scope.todo !== '') {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      }
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
