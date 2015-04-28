'use strict';

/**
 * @ngdoc function
 * @name civHelpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the civHelpApp
 */
angular.module('civHelpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
