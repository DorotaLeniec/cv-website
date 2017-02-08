var $topMenu = $('.static-menu');
var $leftMenu = $('.sliding-menu');
var $menuClose = $('.menu-close');
var $menuHamburger = $('.menu-hamburger');
var $menuLabel = $('.sliding-menu label');
var $currentLabel;
var $letter = $('.name-letter')

function closeSlideNavigation() {
  $topMenu.css({'top': '0'});
  $leftMenu.css({'left': '-1000px'});
  $menuLabel.css({'opacity': '0'});
}

$(document).on('change', function () {
    $currentLabel = $('input[name=slide]:checked').val();
    $('#menu-pointer').html($currentLabel)
  }
)

$menuHamburger.on('click', function () {
  $topMenu.css({'top': '-100px'});
  $leftMenu.css({'left': '0'});
  $menuLabel.css({'opacity': '0.9'})
});

$menuClose.on('click', closeSlideNavigation);

$menuLabel.on('click', closeSlideNavigation);

$letter.mouseenter(function () {
  $(this).addClass('animated rubberBand');
  $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass('animated rubberBand')
  });
})

