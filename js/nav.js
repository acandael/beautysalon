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
      var icon = $(this).find('i');
      icon.removeClass("fa fa-chevron-right").addClass("fa fa-chevron-down"); 
    },
    function() {
      $(this).parent().find('.submenu').css("position", "absolute");
      var icon = $(this).find('i');
      icon.removeClass("fa fa-chevron-down").addClass("fa fa-chevron-right"); 
    });
  }
});
