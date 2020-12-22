$(function () {

	$('.reviews__slider-inner').slick({
		infinite: false,
		speed: 600,
		dots: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-btn slick-prev"><svg width="68" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM68 7H1v2h67V7z" fill="#4F4F4F"/></svg></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><svg width="68" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M67.707 7.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414-1.414L65.586 8l-5.657-5.657A1 1 0 0161.343.93l6.364 6.364zM0 7h67v2H0V7z" fill="#4F4F4F"/></svg></button>',

		responsive: [
			{
			  breakpoint: 500,
			  settings: {
				dots: false
			  }
			}
		  ]
		// autoplay: true,
		// autoplaySpeed: 2800
	});

	$('.header__menu-btn').on('click', function () {
		$('.header__menu-list').slideToggle(700);
		$('.header__menu-list').addClass('dropdown')
		// $('.header__menu-list')(function(){
		// 	if ($(this).hasClass('.dropdown')) {
		// 		$('.header__menu-list').fadeOut(300);
		// 	}
		// 	else {
		// 		$(this).addClass('.dropdown')
		// 	}
		// });
	});

	$('.header__menu-link').on('click', function() {
		$('.header__menu-list.dropdown').fadeOut(500)
		$('.header__menu-list.dropdown').removeClass('dropdown')
		$('.header__menu-btn svg').removeClass('.active');
     }) ;

	// Скрываем блок с категориями, по клику вне блока
	let btnCategories = $('.header__menu-btn'), // указываем кнопку
		categories = $('.dropdown');

	$(document).on('click', function (e) { // событие клика по веб-документу
		if (
			!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 
			// если клик был не по нашему блоку
			&&
			!categories.is(e.target) && categories.has(e.target).length === 0
			// и не по его дочерним элементам
		) {
			categories.fadeOut(500); // скрываем его
			$('.header__menu-btn svg').removeClass('active');
		}
	});

	// Плавный скролл по странице
	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		
		const blockID = anchor.getAttribute('href')
		
		document.querySelector(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
		})
	})
	}


});