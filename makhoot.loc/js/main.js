$(function(){

	$('.btn__menu').on('click', function () {
		$('.menu__list').slideToggle();
	});
	
	$(".footer__left, .back-to-top__link").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	function backToTop() {
		let button = $('.back-to-top__link');

		$(window).on('scroll', () => {
			if ($(this).scrollTop() >= 500) {
				button.fadeIn();
			} else {
				button.fadeOut();
			}
		});

		button.on('click', (e) => {
			e.preventDefault();
			$('html').animate({scrollTop: 0}, 1000)
		})
	};
	backToTop();

	$('.slider-top__items').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 600,
		adaptiveHeight: true,
		// autoplay: true,
		// autoplaySpeed: 3000
	  });

	  $('.reviews__slider').slick({
		dots: false,
		arrows: true,
		infinite: false,
		speed: 600,
		adaptiveHeight: true,
		slidesToShow: 2,
		slidesToScroll: 1,

		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>'
		// autoplay: true,
		// autoplaySpeed: 1500
	  });
});