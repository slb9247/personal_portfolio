$(document).on('ready', function() {

// specifies current page
  $('nav a').on('click', function() {
    $('nav a').removeClass('current');
    $(this).addClass('current');
  });



// home page transition animations
  $('#link-about, #link-design, #link-dev').on('click', function() {

      $('#splash').addClass('animate_elem_slideup');

      setTimeout(function() {
        $('#splash').removeClass('animate_elem_slideup');
      }, 5000); // event listener?
  });

// design page fade in
  $('#link-design').on('click', function() {

    $('#page-design').fadeIn(5000);
  });













}); // ends doc.ready
