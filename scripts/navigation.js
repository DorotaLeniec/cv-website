var $topMenu = $('.static-menu');
var $leftMenu = $('.sliding-menu');
var $menuClose = $('.menu-close');
var $menuHamburger = $('.menu-hamburger');


$menuHamburger.on('click', function(){
  console.log('menu');
  $topMenu.css({'top':'-100px'});
  $leftMenu.css({'left':'0'});
});

$menuClose.on('click',function(){
  $topMenu.css({'top':'0'});
  $leftMenu.css({'left':'-500px'})
})