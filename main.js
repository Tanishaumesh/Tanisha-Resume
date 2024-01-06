jQuery(document).ready(function($) {
	var mastheadheight = $('.ds-header').outerHeight();
	// console.log(mastheadheight);
	$(".ds-banner, .ds-main-section").css("margin-top", mastheadheight);
  
	$(window).scroll(function() {
	  if ($(window).scrollTop() >= 10) {
		$('.ds-header').addClass('ds-fixed-header');
	  } else {
		$('.ds-header').removeClass('ds-fixed-header');
	  }
	}).scroll();
  
	// Example: Alert on page load
	$(window).on("load", function() {
	  alert("Welcome to my portfolio!");
	});
  
	// Example: Smooth scrolling to section
	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();
	  
		var target = $($(this).attr('href'));
	  
		if (target.length) {
		  $('html, body').animate({
			scrollTop: target.offset().top
		  }, 1000, 'swing'); // 'swing' is the default easing
		}
	  });
	  
  });
  