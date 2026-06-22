$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $("#scrollBtn").fadeIn();
  } else {
    $("#scrollBtn").fadeOut();
  }
});

// Accordion open/close animation tracking
$('.accordion-button').on('click', function() {
  const isExpanded = $(this).attr('aria-expanded');
  if (isExpanded === 'true') {
    $(this).closest('.accordion-item')
      .find('.accordion-body')
      .slideUp(200);
  }
});