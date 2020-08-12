$(function () {

	$('.fairy-tail__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
		autoplay: true,
		fade: true,

		responsive: [
			{
				breakpoint: 601,
				settings: {
					arrows: false
				}
			},
		]
	});

	$('.our-trip__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
		autoplay: true,
		// autoplaySpeed: 3000,
		fade: true,

		responsive: [
			{
				breakpoint: 841,
				settings: {
					arrows: false
				}
			},
		]
	});

	$(".menu, .our-trip__body, .back-to-top").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 1500);
	});


	function backToTop() {
		let button = $('.back-to-top');

		$(window).on('scroll', () => {
			if ($(this).scrollTop() >= 500) {
				button.fadeIn();
			} else {
				button.fadeOut();
			}
		});

		button.on('click', (e) => {
			e.preventDefault();
			$('html').animate({ scrollTop: 0 }, 1000)
		})
	};
	backToTop();
});
