$(document).on('ready', function() {

  /* hamburger menu */
    $('.hamburger').on('click', function() {
      $('.hamburger').toggleClass('is-active');
      $('#menu-overlay').fadeToggle(200);
    });

}); // ends doc.ready
