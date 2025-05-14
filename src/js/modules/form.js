const allInputs = document.querySelectorAll('.delivery__form input')

allInputs.forEach(input => {
	const checkInput = () => {
		if (input.value.trim() !== '') {
			input.classList.add('filled')
		} else {
			input.classList.remove('filled')
		}
	}

	input.addEventListener('input', checkInput)
	input.addEventListener('blur', checkInput)

	checkInput()
})
