$(function () {

	// Плавный скролл по странице
	$(".header__nav, .header__content, .action__inner, .back-to-top__link").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	// Кнопка Наверх
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

	// Выпадающее бургер-меню при адаптиве
	$('.header__btn-menu').on('click', function () {
		$('.header__nav').slideToggle();
	});

	// всплывающие окна - изображения в галереее
	$('.works__item-btn').magnificPopup({
		type: 'image'
	});

	//  слайдер
	$('.about-slider__inner').slick({
		infinite: false,
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 4,	
		
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false
			  }
			},
			{
			  breakpoint: 770,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});

	//  ещё слайдер
	$('.clients-slider__inner').slick({
		infinite: false,
		arrows: false,
		dots: true,
		speed: 400,
		
	});

	var mixer = mixitup('.works__items');

});