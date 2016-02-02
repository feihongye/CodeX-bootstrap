'use strict';

angular.module('myApp')
.directive('navBar', function() {
  return {
      restrict: 'E',
      replace: true,
      templateUrl: '../views/partials/navbar.html'
    };
})
.directive('footerBar', function() {
  return {
      restrict: 'E',
      replace: true,
      templateUrl: '../views/partials/footer.html'
    };
})
.directive('quoteBar', function() {
  return {
      restrict: 'E',
      replace: true,
      templateUrl: '../views/partials/quote.html'
    };
})
.directive('benefitBar', function() {
  return {
      restrict: 'E',
      replace: true,
      templateUrl: '../views/partials/benefit.html'
    };
})
.directive('courseBar', function() {
  return {
      restrict: 'E',
      replace: true,
      templateUrl: '../views/partials/course-bar.html'
    };
});