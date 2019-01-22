// $(function() {


// "use strict";
// var wind = $(window);

// // Stellar init
// wind.stellar();


// // scrollIt
// $.scrollIt({
//   upKey: 38,                // key code to navigate to the next section
//   downKey: 40,              // key code to navigate to the previous section
//   easing: 'swing',         // the easing function for animation
//   scrollTime: 600,          // how long (in ms) the animation takes
//   activeClass: 'active',    // class given to the active nav element
//   onPageChange: null,       // function(pageIndex) that is called when page is changed
//   topOffset: -60            // offste (in px) for fixed top navigation
// });

//   // close navbar-collapse when a  clicked
//   // $(".nav a").on('click', function () {
//       // $(".navbar-collapse").removeClass("in").addClass("collapse");
//   // });


//     // navbar scrolling background
//     wind.on("scroll",function () {
//         var bodyScroll = wind.scrollTop(),
//             navbar = $(".navbar-default")
//         if(bodyScroll > 300){
//             navbar.addClass("nav-scroll");
//         }else{
//             navbar.removeClass("nav-scroll");
//         }
//     });

// // Skills bar animation settings
// $('.skills-progressbar-item').progressBar({
//   shadow : false,
//   percentage : true,
//   animation : true,
//   animateTarget : true,
//   barColor : "#333333",
// });

// });





















$(function() {

  "use strict";

    var wind = $(window);


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
    $(".nav a").on('click', function () {
        $(".navbar-collapse").removeClass("in").addClass("collapse");
    });


    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default")

        if(bodyScroll > 300){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
    });


    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });




  // stellar
    wind.stellar();


// Skills bar animation settings
$('.skills-progressbar-item').progressBar({
  shadow : false,
  percentage : true,
  animation : true,
  animateTarget : true,
  barColor : "#333333",
});

});







$(window).on("load",function (){

    // Preloader
    $(".loading").addClass("loading-end").fadeOut(1000);


});
