$(document).on("ready", function() {
  (function($) {
    "use strict"
    /*--------------------
        * Header Class
    ----------------------*/
    // $(".navbar-toggler").on("click", function(a) {
    //   a.preventDefault(), $(".navbar").addClass("fixed-header")
    // });
    $(".toggler-menu").on('click', function() {
      $(this).addClass("open");
      $(".top-side-nav").addClass("menu-open");
      $(".menu-overlay").addClass("overlay-show");
    });
    $(".menu-toggler-close, .menu-overlay, .top-side-nav li a").on('click', function() {
      $(".toggler-menu").removeClass("open");
      $(".top-side-nav").removeClass("menu-open");
      $(".menu-overlay").removeClass("overlay-show");
    });
    /*--------------------
        * Menu Close
    ----------------------*/
    // $('.navbar-nav .nav-link').on('click', function() {
    //   var toggle = $('.navbar-toggler').is(':visible');
    //   if(toggle) {
    //     $('.navbar-collapse').collapse('hide');
    //   }
    // });
    /*--------------------
        * Smooth Scroll
    ----------------------*/
    $('a[href*="#"]:not([href="#"])').on('click', function() {
      if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if(target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 65,
          }, 1000);
          return false;
        }
      }
    });
    if($(window).scrollTop() >= 60) {
      $('.navbar').addClass('fixed-header');
    } else {
      $('.navbar').removeClass('fixed-header');
    }
    /*--------------------
        * TypeIt 
    ----------------------*/
    // new TypeIt('#type-it', {
    //   speed: 200,
    //   loop: true,
    //   strings: ['Freelancer', 'Designer', 'Creator'],
    //   breakLines: false
    // });
    $(window).on("scroll", function() {
      if($(window).scrollTop() >= 60) {
        $('.navbar').addClass('fixed-header');
      } else {
        $('.navbar').removeClass('fixed-header');
      }
    });
  })(jQuery);
});