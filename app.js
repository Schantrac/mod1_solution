(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
    $scope.stateOfBeing = "hungry";
    $scope.foodEntered = "";
    $scope.sayMessage = function() {
      return "Yaakov likes to eat healthy snacks at night!";
    };

    $scope.checkEntered = function () {

      if ($scope.foodEntered == "")
      {
        $scope.outputMsg = "Please enter data first";
        var arrayOfStrings = "";
      }
      else {
        var arrayOfStrings = $scope.foodEntered.split(',');
      }

      console.log($scope.foodEntered);
      console.log('The array has ' + arrayOfStrings.length);
        if (arrayOfStrings.length != 0)
        {
          if (arrayOfStrings.length <= 3)
          {
            $scope.outputMsg = "Enjoy!";
          }
          else {
            $scope.outputMsg = "Too much!";
          }
        }

    };
  }

  })();
