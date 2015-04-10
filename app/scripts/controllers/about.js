'use strict';

/**
 * @ngdoc function
 * @name apqmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apqmApp
 */
angular.module('apqmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
