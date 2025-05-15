var swiper = new Swiper('.swiperModal', {
	navigation: {
		nextEl: '.modal-button-next',
		prevEl: '.modal-button-prev',
	},
	spaceBetween: 24,
	slidesPerView: 1,
	breakpoints: {
		991: {
			slidesPerView: 3,
		},
	},
})
