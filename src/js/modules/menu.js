document.addEventListener('DOMContentLoaded', function () {
	const burgerButton = document.querySelector('.header__right button')
	const menu = document.querySelector('.menu')
	const closeButton = document.querySelector('.menu__close')

	const menuLinks = document.querySelectorAll('.menu__nav a, .menu__list a')
	const menuLogo = document.querySelector('.menu__logo')
	const buyButton = document.querySelector('.menu .primary')

	function closeMenu() {
		menu.classList.remove('menu--active')
		document.body.classList.remove('no-scroll')
	}

	// Відкриття меню
	burgerButton.addEventListener('click', () => {
		menu.classList.add('menu--active')
		document.body.classList.add('no-scroll')
	})

	// Закриття по кнопці
	closeButton.addEventListener('click', closeMenu)

	// Закриття при кліку на пункти меню
	menuLinks.forEach(link => {
		link.addEventListener('click', closeMenu)
	})

	// Закриття при кліку на логотип
	if (menuLogo) {
		menuLogo.addEventListener('click', closeMenu)
	}

	// Закриття при кліку на кнопку "КУПИТИ ЗАРАЗ"
	if (buyButton) {
		buyButton.addEventListener('click', closeMenu)
	}

	// Необов’язково: закриття при кліку поза меню
	document.addEventListener('click', e => {
		if (
			menu.classList.contains('menu--active') &&
			!e.target.closest('.menu') &&
			!e.target.closest('.header__right button')
		) {
			closeMenu()
		}
	})
})
