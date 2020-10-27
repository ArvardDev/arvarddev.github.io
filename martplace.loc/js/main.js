$(function () {

	$('.header__menu-btn').on('click', function () {
		$('.header__menu-list').slideToggle("slow");
	});
	$('.header__profile-btn').on('click', function () {
		$('.header__profile-box').toggleClass('active');
	});

	$('.header__link-home').on('click', function () {
		$('.header__list-home').slideToggle("slow");
	});
	$('.header__link-products').on('click', function () {
		$('.header__list-products').slideToggle("slow");
	});
	$('.header__link-wordpress').on('click', function () {
		$('.header__list-wordpress').slideToggle("slow");
	});
	$('.header__link-features').on('click', function () {
		$('.header__list-features').slideToggle("slow");
	});
	$('.header__link-pages').on('click', function () {
		$('.header__pages-wrap').slideToggle();
	});

	$(function () {
		if ($(window).width() < 901) {
			$('.main-pages__title').on('click', function () {
				$('.main-pages__list').slideToggle();
			})
		}
	});
	$(function () {
		if ($(window).width() < 901) {
			$('.dashboard__title').on('click', function () {
				$('.dashboard__list').slideToggle();
			})
		}
	});
	$(function () {
		if ($(window).width() < 901) {
			$('.other-pages__title').on('click', function () {
				$('.other-pages__list').slideToggle();
			})
		}
	});


	// Скрыть блок с категориями, по клику вне блока
	let btnCategories = $(".header__link-home, .header__link-products, .header__link-wordpress, .header__link-features, .header__link-pages"); // указываем кнопку
	let categories = $(".header__list-home, .header__list-products, .header__list-wordpress, .header__list-features, .header__pages-wrap");
	$(document).on('click', function (e) { // событие клика по веб-документу
		if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
			// если клик был не по нашему блоку
			!categories.is(e.target) && categories.has(e.target).length === 0
			// и не по его дочерним элементам
		) {
			categories.fadeOut(); // скрываем его
		}
	});

	$('#create__search-list').styler();
	$('#product__filter').styler();
	$('#products-page__sort-list').styler();
	$('#products-page__per-page').styler();

	$('.category-aside__title').on('click', function () {
		$(this).next('.category__list').slideToggle();
	});
	$('.filter-aside__title').on('click', function () {
		$(this).next('.filter__list').slideToggle();
	});
	$('.pricing-aside__title').on('click', function () {
		$(this).next('#pricing-aside__range').slideToggle();
	});

	$('.js-range-slider').ionRangeSlider({
		type: "double",
		min: 0,
		max: 400,
		from: 30,
		to: 300,
	});

	$('.products-page__view-list').on('click', function () {
		$('.products-page__items').removeClass('grid');
		$('.products-page__items').addClass('list');
		$('.products-page__view-list').addClass('active');
		$('.products-page__view-grid').removeClass('active');

	});
	$('.products-page__view-grid').on('click', function () {
		$('.products-page__items').removeClass('list');
		$('.products-page__items').addClass('grid');
		$('.products-page__view-list').removeClass('active');
		$('.products-page__view-grid').addClass('active');

	});

	$('.products__filter-btn').on('click', function () {
		$('.products__filter-list').slideToggle();
	});

	$('.rate-stars').rateYo({
		rating: 3.5,
		maxValue: 5,
		numStars: 5,
		starWidth: "15px",
		readOnly: true,
		normalFill: 'transparent',
		ratedFill: '#ffc000',

		starSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
	});

	$('.featured__slider').slick({
		prevArrow: '<button type="button" class="slick-prev slick-btn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"></path></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-btn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">\
		<path fill="#000000" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>\
		</svg></button>',
		responsive: [{
			breakpoint: 480,
			settings: {
				// arrows: false
			}
		}]
	});

	$('.followers__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev slick-btn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"></path></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-btn"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">\
		<path fill="#000000" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>\
		</svg></button>',
		responsive: [{
				breakpoint: 1200,
				settings: {
					autoplay: false,
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					autoplay: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					autoplay: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 520,
				settings: {
					autoplay: true,
					autoplaySpeed: 3000,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});

	$('.reviews__slider').slick({
		arrows: false,
		slidesToShow: 2,
		autoplay: true,
		autoplaySpeed: 2800,
		responsive: [{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
				}
			}]
	});
	$('.more-items__inner').slick({
		arrows: false,
		slidesToShow: 3,
		// autoplay: true,
		// autoplaySpeed: 2500,
		
		responsive: [{
			breakpoint: 1200,
			settings: {
				autoplay: false,
			}
		},
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 2,
				autoplay: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				autoplay: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 520,
			settings: {
				autoplay: true,
				autoplaySpeed: 3000,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		}
	]
	});

	$('.product__tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.product__tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.product__tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});


	var mixer = mixitup('.products__items');

	// // Кнопка Наверх
	// function backToTop() {
	// 	let button = $('.back-to-top__link');
	// 	$(window).on('scroll', () => {
	// 		if ($(this).scrollTop() >= 500) {
	// 			button.fadeIn();
	// 		} else {
	// 			button.fadeOut();
	// 		}
	// 	});
	// 	button.on('click', (e) => {
	// 		e.preventDefault();
	// 		$('html').animate({
	// 			scrollTop: 0
	// 		}, 1000)
	// 	})
	// };
	// backToTop();
})