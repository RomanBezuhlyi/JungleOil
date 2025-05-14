document.addEventListener('DOMContentLoaded', () => {
	const select = document.getElementById('state-select')
	const selected = select.querySelector('.custom-select__selected')
	const options = select.querySelector('.custom-select__options')
	const hiddenInput = select.parentElement.querySelector('input[type="hidden"]')

	select.addEventListener('click', () => {
		options.classList.toggle('hidden')
	})

	options.addEventListener('click', e => {
		if (e.target.tagName === 'LI') {
			const value = e.target.getAttribute('data-value')
			selected.textContent = value
			hiddenInput.value = value

			// Активне підсвічування
			options
				.querySelectorAll('li')
				.forEach(li => li.classList.remove('selected'))
			e.target.classList.add('selected')

			options.classList.remove('hidden')
		}
	})

	// Клік поза селектом — закриває меню
	document.addEventListener('click', e => {
		if (!select.contains(e.target)) {
			options.classList.add('hidden')
		}
	})
})
