$(document).ready(function(){

  // =Hero
  // Alway make hero-container height equal to window height

  var $heroContainer = $('.hero');

  $heroContainer.height(window.innerHeight);

  // When user resize browser window, hero container needs to have the same
  // height as browser window height.

  $(window).resize(function() {
    $heroContainer.height(window.innerHeight);
  });

  // Scrollreveal initialize

  var config = {

    easing: 'hustle',
    reset:  false,
    delay:  'onload',
    opacity: 0.6,
    vFactor: 0.2,
    mobile: false
  }

  window.sr = new scrollReveal( config );

});
