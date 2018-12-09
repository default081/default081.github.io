
// Toggle navbar styles while scrolling
$(window).scroll(function(){
  $('.navbar').toggleClass('navBar_scrolled', $(this).scrollTop() > 50);
});

// Toggle hamburger animation
$(".hamburger").click(function(event) {
  $(".hamburger").toggleClass('is-active');
});

// Start scrollIt Plugin 
$(function() { $.scrollIt({topOffset: 0});});

// Start AOS animation plugin
AOS.init();

// Skills bar animation settings
$('.skills-progressbar-item').progressBar({
	shadow : false,
	percentage : true,
	animation : true,
	animateTarget : true,
	barColor : "#52ADF9",
});

// Back to top button
if ($('#back-to-top').length) {
var scrollTrigger = 100, // px
    backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.item',
});
// store filter for each group
var filters = {};
$('.works__buttons_filters').on( 'click', '.works__buttons_group_item', function( event ) {
  var $button = $( event.currentTarget );
  // get group key
  var $buttonGroup = $button.parents('.works__buttons_group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $button.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.works__buttons_group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function( event ) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    $button.addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

/*Works Poupup Settings*/
$('.popup-with-zoom-anim').magnificPopup({
  type: 'inline',

  fixedContentPos: false,
  fixedBgPos: true,

  overflowY: 'auto',

  closeBtnInside: true,
  preloader: false,
  
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-zoom-in'
});

/*News Popup Settings*/