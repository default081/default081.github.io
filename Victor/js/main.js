$(function() {


"use strict";
var wind = $(window);

// Stellar init
wind.stellar();


// scrollIt
$.scrollIt({
  upKey: 38,                // key code to navigate to the next section
  downKey: 40,              // key code to navigate to the previous section
  easing: 'swing',         // the easing function for animation
  scrollTime: 600,          // how long (in ms) the animation takes
  activeClass: 'active',    // class given to the active nav element
  onPageChange: null,       // function(pageIndex) that is called when page is changed
  topOffset: -60            // offste (in px) for fixed top navigation
});

  // close navbar-collapse when a  clicked
  // $(".nav a").on('click', function () {
      // $(".navbar-collapse").removeClass("in").addClass("collapse");
  // });


    // navbar scrolling background
    wind.on("scroll",function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default")
        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
        }else{
            navbar.removeClass("nav-scroll");
        }
    });

// Skills bar animation settings
$('.skills-progressbar-item').progressBar({
  shadow : false,
  percentage : true,
  animation : true,
  animateTarget : true,
  barColor : "#333333",
});

});

