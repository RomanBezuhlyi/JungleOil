AOS.init({
	duration: 1000,
	once: true,
})
document.addEventListener('DOMContentLoaded', function () {
	const links = document.querySelectorAll('.transition-link')

	links.forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault()
			const href = this.getAttribute('href')

			document.body.classList.add('fade-out')

			setTimeout(() => {
				window.location.href = href
			}, 300)
		})
	})

	window.addEventListener('pageshow', function (event) {
		if (event.persisted) {
			document.body.classList.remove('fade-out')
		}
	})
})
