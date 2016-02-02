'use strict';

angular.module('myApp', ['ngRoute', 'fox.scrollReveal'])
.config(function($routeProvider){

  $routeProvider
    .when('/', {
    templateUrl: '../views/main.html',
    controller: 'ScrollCtrl'
  })
    .when('/free-course', {
    templateUrl: '../views/free-course.html'
  })
    .when('/course-baby', {
    templateUrl: '../views/course-baby.html'
  })
    .when('/course-cat', {
    templateUrl: '../views/course-cat.html'
  })
    .when('/course-maker', {
    templateUrl: '../views/course-maker.html'
  })
    .when('/faq', {
    templateUrl: '../views/faq.html'
  })
    .when('/letter', {
    templateUrl: '../views/letter.html'
  })
    .when('/feature', {
    templateUrl: '../views/feature.html'
  })
    .when('/contact', {
    templateUrl: '../views/contact.html'
  })
    .when('/history', {
    templateUrl: '../views/history.html'
  })
    .when('/team', {
    templateUrl: '../views/team.html'
  })
    .when('/join', {
    templateUrl: '../views/join.html'
  })
  .otherwise({
    redirectTo: "/"
  });
//  $locationProvider.html5Mode(true); //activate HTML5 Mode
})
.controller('HeaderController', function($scope, $location){
  $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
})
.controller('ScrollCtrl', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoBottom = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('benefit');

      // call $anchorScroll()
      $anchorScroll();
    };
  }])
.controller('CarouselCtrl', function($scope){
  $scope.myInterval = 3000;
})
.controller('MainCtrl', ['$scope', function($scope) {
  $scope.texttyping = ["Coding for kids?", "少儿编程，无限可能"]
}])
.directive('typeIt', function () {
    return {
        restrict: 'AE',    
        scope: { strings: '=' },
        template:'<span id="typed-output"></span>',
        link: function ($scope, $element, $attrs) {
          var options = {strings: $scope.strings,
                          typeSpeed: 160,
                         // time before typing starts
                          startDelay: 250,
                         // loop
                          loop: false,
//                          breakLines: false,
                         // show cursor
                          showCursor: true,
                          contentType: "html",
                          cursorChar: "_"
                          };

          $(function(){
            $("#typed-output").typed( options );
          });
        }
    };
});;