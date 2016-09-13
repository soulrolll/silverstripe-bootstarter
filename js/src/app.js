/* Add node_modules javascript here */
var bootstrap = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js');

/* Make Bootstrap tables responsive */
$('table').each(function() {
  var element = $(this);
  // Create the wrapper element
  var scrollWrapper = $('<div />', {
    'class': 'table-responsive',
    'html': '<div />' // The inner div is needed for styling
  }).insertBefore(element);
  // Store a reference to the wrapper element
  element.data('scrollWrapper', scrollWrapper);
  // Move the scrollable element inside the wrapper element
  element.appendTo(scrollWrapper.find('div'));
  // Check if the element is wider than its parent and thus needs to be scrollable
  if (element.outerWidth() > element.parent().outerWidth()) {
    element.data('scrollWrapper').addClass('has-scroll');
  }
  // When the viewport size is changed, check again if the element needs to be scrollable
  $(window).on('resize orientationchange', function() {
    if (element.outerWidth() > element.parent().outerWidth()) {
      element.data('scrollWrapper').addClass('has-scroll');
    } else {
      element.data('scrollWrapper').removeClass('has-scroll');
    }
  });
});

/* Make Bootstrap dropdown parents clickable */
function bindNavbar() {
  if ($(window).width() > 768) {
    $('.navbar-nav .dropdown').on('mouseover', function(){
      $('.dropdown-toggle', this).next('.dropdown-menu').show();
    }).on('mouseout', function(){
      $('.dropdown-toggle', this).next('.dropdown-menu').hide();
    });
    $('.dropdown-toggle').click(function() {
      if ($(this).next('.dropdown-menu').is(':visible')) {
        window.location = $(this).attr('href');
      }
    });
  }
  else {
    $('.navbar-nav .dropdown').off('mouseover').off('mouseout');
  }
}

$(window).resize(function() {
  bindNavbar();
});

bindNavbar();

/* Match height */
$('.footer-list').matchHeight();
