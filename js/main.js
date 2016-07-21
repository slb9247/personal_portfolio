$(document).on('ready', function() {

/* specifies currently clicked on link */
  $('nav a').on('click', function() {
    $('nav a').removeClass('clicked');
    $(this).addClass('clicked');
  });


// home page transition out

    //   setTimeout(function() {
    //     $('#splash').removeClass('animate_elem_slideup');
    //   }, 5000); // event listener?
    //

/* home page click function */
  $('#link-home').on('click', function() {

      // if the home page is NOT the current page...
      if (!$('#page-home').hasClass('current')) {

          // if the current page is about
          if ($('#page-about').hasClass('current')) {
            $('#page-about').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-home').animate({'opacity': '1'}, 500);
            })
          }

          // if the current page is design
          else if ($('#page-design').hasClass('current')) {
            $('#page-design').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-home').animate({'opacity': '1'}, 500);
            });
          }

          // if the current page is development
          else if ($('#page-dev').hasClass('current')) {
            $('#page-dev').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-home').animate({'opacity': '1'}, 500);
            });
          }

          // move the 'current' class to the home page
    			$('.page').removeClass('current');
    			$('#page-home').addClass('current');

      } // ends if not statement

  }); // ends link-dev click function

/* about page click function */
  $('#link-about').on('click', function() {

      // if the about page is NOT the current page...
      if (!$('#page-about').hasClass('current')) {

          // if the current page is home
          if ($('#page-home').hasClass('current')) {
            $('#page-home').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-about').animate({'opacity': '1'}, 500);
            });
          }

          // if the current page is design
          else if ($('#page-design').hasClass('current')) {
            $('#page-design').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-about').animate({'opacity': '1'}, 500);
            });
          }

          // if the current page is development
          else if ($('#page-dev').hasClass('current')) {
            $('#page-dev').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-about').animate({'opacity': '1'}, 500);
            });
          }

          // move the 'current' class to the about page
          $('.page').removeClass('current');
          $('#page-about').addClass('current');

      } // ends if not statement

  }); // ends link-about click function



/* design page click function */
  $('#link-design').on('click', function() {

      // if the design page is NOT the current page...
      if (!$('#page-design').hasClass('current')) {

          // if the current page is home
          if ($('#page-home').hasClass('current')) {
            $('#page-home').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-design').animate({'opacity': '1'}, 500);
            });
          }

          // if the current page is about
          else if ($('#page-about').hasClass('current')) {
            $('#page-about').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-design').animate({'opacity': '1'}, 500);
            })
          }

          // if the current page is development
          else if ($('#page-dev').hasClass('current')) {
            $('#page-dev').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-design').animate({'opacity': '1'}, 500);
            });
          }

          // move the 'current' class to the design page
    			$('.page').removeClass('current');
    			$('#page-design').addClass('current');

      } // ends if not statement

  }); // ends link-design click function



/* development page click function */
  $('#link-dev').on('click', function() {

      // if the development page is NOT the current page...
      if (!$('#page-dev').hasClass('current')) {

          // if the current page is home
          if ($('#page-home').hasClass('current')) {
            $('#page-home').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-dev').animate({'opacity': '1'}, 500);
            });
          }

          // if the current page is about
          if ($('#page-about').hasClass('current')) {
            $('#page-about').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-dev').animate({'opacity': '1'}, 500);
            })
          }

          // if the current page is design
          else if ($('#page-design').hasClass('current')) {
            $('#page-design').animate({
              'opacity': '0'
            }, 1000, function() {
              $('#page-dev').animate({'opacity': '1'}, 500);
            });
          }

          // move the 'current' class to the development page
    			$('.page').removeClass('current');
    			$('#page-dev').addClass('current');

      } // ends if not statement

  }); // ends link-dev click function





}); // ends doc.ready
