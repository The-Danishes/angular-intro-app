/* global angular */

(function() {
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope) {
    $scope.message = "Hello!";

    $scope.reviews = ["Angular is the best!", "Angular is the coolest!", "I love angular"];

    $scope.addReview = function(review) {
      $scope.reviews.push(review);
    };

    window.$scope = $scope;
  });

})();