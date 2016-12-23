(function() {
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope) {
    $scope.message = "Hello!";

    window.$scope = $scope;
  });

})();