$(document).ready(function() {
  $('.fa').on('click', function(){
    $(this).parent().find('ul').slideToggle();

    $(window).on('resize', function() {
      if ( $(window).width() > 480 ) {
        $('ul').show();
      }
    })
  });
  if ( $(window).width() < 480) {
    var dropdown = $('.dropdown');  
    dropdown.prepend('<a class="show" href="#"><i class="fa fa-chevron-right"></i></a>');

    $('.show').toggle(function() {
      $(this).parent().find('.submenu').css("position", "relative");
    },
    function() {
      $(this).parent().find('.submenu').css("position", "absolute");
    });
  }
});
