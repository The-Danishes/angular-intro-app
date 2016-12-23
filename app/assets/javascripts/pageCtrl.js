/* global angular */

(function() {
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope) {
    $scope.message = "Hello!";

    // $scope.reviews = ["Angular is the best!", "Angular is the coolest!", "I love angular"];

    $scope.reviews = [
      {
        text: "Angular is the best!",
        rating: 5,
        author: "Me"
      },
      {
        text: "Angular is the coolest!",
        rating: 4,
        author: "Anonymous"
      },
      {
        text: "I love angular",
        rating: 3,
        author: "Person"
      }
    ];

    $scope.addReview = function(text, rating, author) {
      if (text && rating && author) {
        var review = {
          text: text,
          rating: rating,
          author: author
        };

        $scope.reviews.push(review);

        $scope.newReviewText = null;
        $scope.newReviewRating = null;
        $scope.newReviewAuthor = null;
      }
    };

    $scope.deleteReview = function(index) {
      $scope.reviews.splice(index, 1);
    };

    $scope.isPositive = function(review) {
      // if (review.indexOf("bad") == -1) {
      //   return true;
      // } else {
      //   return false;
      // }

      // 3 == "3" => true
      // 3 === "3" => false

      return (review.indexOf("bad") == -1);
    };

    window.$scope = $scope;
  });

})();