$(document).on('ready', function() {



  $('#link-about, #link-design, #link-dev').on('click', function() {
    $('#splashTop').addClass('animate_elem animate_elem_slideup');

    setTimeout(function() {
      $('#splashTop').removeClass('animate_elem animate_elem_slideup');
    }, 5000);
  });













}); // ends doc.ready
