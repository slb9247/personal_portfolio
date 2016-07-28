$(document).on('ready', function() {

/* specifies currently clicked on link */
  $('.menu-main a').on('click', function() {
    $('.menu-main a').removeClass('clicked');
    $(this).addClass('clicked');
  });



/* specifies currently clicked on link from drop menu */
  $('#drop-home').on('click', function() {
    $('.menu-main a').removeClass('clicked');
    $('#link-home').addClass('clicked');
  });

  $('#drop-about').on('click', function() {
    $('.menu-main a').removeClass('clicked');
    $('#link-about').addClass('clicked');
  });

  $('#drop-design').on('click', function() {
    $('.menu-main a').removeClass('clicked');
    $('#link-design').addClass('clicked');
  });

  $('#drop-dev').on('click', function() {
    $('.menu-main a').removeClass('clicked');
    $('#link-dev').addClass('clicked');
  });


/* hamburger menu */
  $('.hamburger').on('click', function(e) {
    $('.hamburger').toggleClass('is-active');
    $('.menu-drop').slideToggle('fast');
  });

  $('.menu-drop a').on('click', function() {
    $('.menu-drop').hide();
    $('.hamburger').removeClass('is-active');
  });


// home page transition out

    //   setTimeout(function() {
    //     $('#splash').removeClass('animate_elem_slideup');
    //   }, 5000); // event listener?
    //



/* home page click function */
  $('#link-home, #drop-home').on('click', function() {

      // if the home page is NOT the current page...
      if (!$('#page-home').hasClass('current')) {

          // if the current page is about
          if ($('#page-about').hasClass('current')) {
            $('#page-about').animate({
              left: '100px',
              opacity: 0
            }, 1000, function() {
              $('#page-about').css('display', 'none'); //after 500 sec?

              $('#page-home').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-home').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-about').css('left', '0px');
            });
          }

          // if the current page is design
          else if ($('#page-design').hasClass('current')) {
            $('#page-design').animate({
              left: '100px',
              opacity: 0
            }, 1000, function() {
              $('#page-design').css('display', 'none'); //after 500 sec?

              $('#page-home').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-home').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-design').css('left', '0px');
            });
          }

          // if the current page is development
          else if ($('#page-dev').hasClass('current')) {
            $('#page-dev').animate({
              left: '100px',
              opacity: 0
            }, 1000, function() {
              $('#page-dev').css('display', 'none'); //after 500 sec?

              $('#page-home').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-home').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-dev').css('left', '0px');
            });
          }

          // move the 'current' class to the home page
    			$('.page').removeClass('current');
    			$('#page-home').addClass('current');

      } // ends if not statement

  }); // ends link-dev click function

/* about page click function */
  $('#link-about, #drop-about').on('click', function() {

      // if the about page is NOT the current page...
      if (!$('#page-about').hasClass('current')) {

          // if the current page is home
          if ($('#page-home').hasClass('current')) {
            $('#page-home').animate({
              left: '-100px',
              opacity: 0
            }, 1000, function() {
              $('#page-home').css('display', 'none'); //after 500 sec?

              $('#page-about').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-about').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-home').css('left', '0px');
            });
          }

          // if the current page is design
          else if ($('#page-design').hasClass('current')) {
            $('#page-design').animate({
              left: '100px',
              opacity: 0
            }, 1000, function() {
              $('#page-design').css('display', 'none'); //after 500 sec?

              $('#page-about').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-about').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-design').css('left', '0px');
            });
          }

          // if the current page is development
          else if ($('#page-dev').hasClass('current')) {
            $('#page-dev').animate({
              left: '100px',
              opacity: 0
            }, 1000, function() {
              $('#page-dev').css('display', 'none'); //after 500 sec?

              $('#page-about').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-about').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-dev').css('left', '0px');
            });
          }

          // move the 'current' class to the about page
          $('.page').removeClass('current');
          $('#page-about').addClass('current');

      } // ends if not statement

  }); // ends link-about click function



/* design page click function */
  $('#link-design, #drop-design').on('click', function() {

      // if the design page is NOT the current page...
      if (!$('#page-design').hasClass('current')) {

          // if the current page is home
          if ($('#page-home').hasClass('current')) {
            $('#page-home').animate({
              left: '-100px',
              opacity: 0
            }, 1000, function() {
              $('#page-home').css('display', 'none'); //after 500 sec?

              $('#page-design').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-design').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-home').css('left', '0px');
            });
          }

          // if the current page is about
          else if ($('#page-about').hasClass('current')) {
            $('#page-about').animate({
              left: '-100px',
              opacity: 0
            }, 1000, function() {
              $('#page-about').css('display', 'none'); //after 500 sec?

              $('#page-design').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-design').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-about').css('left', '0px');
            });
          }

          // if the current page is development
          else if ($('#page-dev').hasClass('current')) {
            $('#page-dev').animate({
              left: '100px',
              opacity: 0
            }, 1000, function() {
              $('#page-dev').css('display', 'none'); //after 500 sec?

              $('#page-design').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-design').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-dev').css('left', '0px');
            });
          }

          // move the 'current' class to the design page
    			$('.page').removeClass('current');
    			$('#page-design').addClass('current');

      } // ends if not statement

  }); // ends link-design click function



/* development page click function */
  $('#link-dev, #drop-dev').on('click', function() {

      // if the development page is NOT the current page...
      if (!$('#page-dev').hasClass('current')) {

          // if the current page is home
          if ($('#page-home').hasClass('current')) {
            $('#page-home').animate({
              left: '-100px',
              opacity: 0
            }, 1000, function() {
              $('#page-home').css('display', 'none'); //after 500 sec?

              $('#page-dev').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-dev').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-home').css('left', '0px');
            });
          }

          // if the current page is about
          if ($('#page-about').hasClass('current')) {
            $('#page-about').animate({
              left: '-100px',
              opacity: 0
            }, 1000, function() {
              $('#page-about').css('display', 'none'); //after 500 sec?

              $('#page-dev').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-dev').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-about').css('left', '0px');
            });
          }

          // if the current page is design
          else if ($('#page-design').hasClass('current')) {
            $('#page-design').animate({
              left: '-100px',
              opacity: 0
            }, 1000, function() {
              $('#page-design').css('display', 'none'); //after 500 sec?

              $('#page-dev').animate({'opacity': '1'}, 500); // fade clicked page in

              $('#page-dev').css('display', 'initial'); // reinstate display

              // moves back to original location while hidden
              $('#page-design').css('left', '0px');
            });
          }

          // move the 'current' class to the development page
    			$('.page').removeClass('current');
    			$('#page-dev').addClass('current');

      } // ends if not statement

  }); // ends link-dev click function





}); // ends doc.ready
