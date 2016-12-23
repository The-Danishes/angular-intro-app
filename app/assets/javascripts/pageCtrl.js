/* global angular */

(function() {
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope) {
    $scope.message = "Hello!";

    $scope.reviews = ["Angular is the best!", "Angular is the coolest!", "I love angular"];

    window.$scope = $scope;
  });

})();