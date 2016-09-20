(function() {
  'use strict';

  const OK = "Enjoy!"
  const NOK = "Too much!"
  const EMPTY = "Please enter data first";
  const RED_CLASS = "red"
  const GREEN_CLASS = "green"

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
      $scope.dishes = "";
      $scope.response = "";
      $scope.color = "";

      $scope.checkTooMuch = function () {

        var result = {};

        if ($scope.dishes.length == 0) {
          result.message = EMPTY;
          result.color = RED_CLASS;
        } else {
          var split = $scope.dishes.split(",");
          if (split.length <= 3) {
            result.message = OK;
            result.color = GREEN_CLASS;
          } else {
            result.message = NOK;
            result.color = GREEN_CLASS;
          }
        }
        $scope.response = result.message;
        $scope.color = result.color;
      }


  };

})();
