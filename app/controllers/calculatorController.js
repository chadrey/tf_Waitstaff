/**
 * Waitstaff Calculator
*/
(function () {
  'use strict';
  
  angular.module('app').controller('calculatorController', ['$scope', '$log',
    function ($scope, $log)
    {
      $scope.meal = {"price": null, "tax": null, "tip": null};
      $scope.charges = {"subTotal": null, "tip": null, "total": null};
      $scope.earnings = {"tips": null, "mealCount": 0, "avgTip": null};
      
      $scope.submit = function() {
        if($scope.myForm.$valid) {
          calculateCharges ();
          tallyEarnings ($scope.charges.tip);
        }
      }

      $scope.cancel = function() {
        $scope.meal = {"price": null, "tax": null, "tip": null};
      }
      
      function calculateCharges ()
      {
        $scope.charges.subTotal = $scope.meal.price + ($scope.meal.price * ($scope.meal.tax / 100));
        $scope.charges.tip      = $scope.charges.subTotal * ($scope.meal.tip / 100);
        $scope.charges.total    = $scope.charges.subTotal + $scope.charges.tip;
      }
      
      function tallyEarnings (tip)
      {
        $scope.earnings.mealCount++;
        $scope.earnings.tips     += tip;
        $scope.earnings.avgTip    = $scope.earnings.tips / $scope.earnings.mealCount;
      }
      
      $scope.tallyReset = function() {
        $scope.meal = {"price": null, "tax": null, "tip": null};
        $scope.charges = {"subTotal": null, "tip": null, "total": null};
        $scope.earnings = {"tips": null, "mealCount": 0, "avgTip": null};
      }
    }
  ]);
})();
