$(document).on('ready', function() {

/* specifies current link/page */
  $('nav a').on('click', function() {
    $('nav a').removeClass('clicked');
    $(this).addClass('clicked');
  });

/* home page click function */
  $('#link-home').on('click', function() {

      // if the home page is NOT the current page...
      if (!$('#page-home').hasClass('current')) {

          // if the current page is about
          if ($('#page-about').hasClass('current')) {
            $('#page-about').animate({
              left: '100px',
              opacity: 0
            }, 1000, function() {
              $('#page-about').css('display', 'none'); //after 500 sec?

              $('#page-home').animate({'opacity': '1'}, 500); // clicked page fades in

              $('#page-home').css('display', 'initial'); // reinstates clicked page's display

              $('#page-about').css('left', '0px'); // clicked-from page moves back to original location while hidden
            });
          }

          // if the current page is work
          else if ($('#page-work').hasClass('current')) {
            $('#page-work').animate({
              left: '100px',
              opacity: 0
            }, 1000, function() {
              $('#page-work').css('display', 'none'); //after 500 sec?

              $('#page-home').animate({'opacity': '1'}, 500); // clicked page fades in

              $('#page-home').css('display', 'initial'); // reinstates clicked page's display

              $('#page-work').css('left', '0px'); // clicked-from moves back to original location while hidden
            });
          }

          // move the 'current' class to the home page
    			$('.page').removeClass('current');
    			$('#page-home').addClass('current');

      } // ends if not statement

  }); // ends link-home click function

/* about page click function */
  $('#link-about').on('click', function() {

      // if the about page is NOT the current page...
      if (!$('#page-about').hasClass('current')) {

          // if the current page is home
          if ($('#page-home').hasClass('current')) {
            $('#page-home').animate({
              left: '-100px',
              opacity: 0
            }, 1000, function() {
              $('#page-home').css('display', 'none'); //after 500 sec?

              $('#page-about').animate({'opacity': '1'}, 500); // clicked page fades in

              $('#page-about').css('display', 'initial'); // reinstates clicked page's display

              $('#page-home').css('left', '0px'); // clicked-from moves back to original location while hidden
            });
          }

          // if the current page is work
          else if ($('#page-work').hasClass('current')) {
            $('#page-work').animate({
              left: '100px',
              opacity: 0
            }, 1000, function() {
              $('#page-work').css('display', 'none'); //after 500 sec?

              $('#page-about').animate({'opacity': '1'}, 500); // clicked page fades in

              $('#page-about').css('display', 'initial'); // reinstates clicked page's display

              $('#page-work').css('left', '0px'); // clicked-from moves back to original location while hidden
            });
          }

          // move the 'current' class to the about page
          $('.page').removeClass('current');
          $('#page-about').addClass('current');

      } // ends if not statement

  }); // ends link-about click function


/* work page click function */
  $('#link-work').on('click', function() {

      // if the design page is NOT the current page...
      if (!$('#page-work').hasClass('current')) {

          // if the current page is home
          if ($('#page-home').hasClass('current')) {
            $('#page-home').animate({
              left: '-100px',
              opacity: 0
            }, 1000, function() {
              $('#page-home').css('display', 'none'); //after 500 sec?

              $('#page-work').animate({'opacity': '1'}, 500); // clicked page fades in

              $('#page-work').css('display', 'initial'); // reinstates clicked page's display

              $('#page-home').css('left', '0px'); // clicked-from moves back to original location while hidden
            });
          }

          // if the current page is about
          else if ($('#page-about').hasClass('current')) {
            $('#page-about').animate({
              left: '-100px',
              opacity: 0
            }, 1000, function() {
              $('#page-about').css('display', 'none'); //after 500 sec?

              $('#page-work').animate({'opacity': '1'}, 500); // clicked page fades in

              $('#page-work').css('display', 'initial'); // reinstates clicked page's display

              $('#page-about').css('left', '0px'); // clicked-from moves back to original location while hidden
            });
          }

          // move the 'current' class to the design page
    			$('.page').removeClass('current');
    			$('#page-work').addClass('current');

      } // ends if not statement

  }); // ends link-work click function


}); // ends doc.ready
