'use strict';

/**
 * @ngdoc function
 * @name apqmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apqmApp
 */
angular.module('apqmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
