'use strict';

angular.module('myApp')
.directive('ScrollReveal', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            angular.element(element).ScrollReveal(easing: 'hustle',
    reset:  false,
    delay:  'onload',
    opacity: 0.6,
    vFactor: 0.2,
    mobile: false);
        }
    };
});