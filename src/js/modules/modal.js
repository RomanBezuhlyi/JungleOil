document.addEventListener('DOMContentLoaded', () => {
	const modalWrap = document.querySelector('.modal-wrap')
	const productModal = document.querySelector('.modal')
	const deliveryModal = document.querySelector('.delivery')
	const openModalBtns = document.querySelectorAll('.open-modal')
	const closeBtns = document.querySelectorAll('.modal__close, .delivery__close')
	const placeOrderBtn = document.getElementById('place-order')
	const submitOrderBtn = deliveryModal.querySelector('button[type="submit"]')
	const formInputs = deliveryModal.querySelectorAll('input[required]')
	const checkboxes = document.querySelectorAll(
		'input[type="checkbox"][name="product"]'
	)

	// Open modal
	openModalBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			modalWrap.classList.remove('hidden')
			productModal.classList.remove('hidden')
			deliveryModal.classList.add('hidden')
			document.body.classList.add('modal-open')
		})
	})

	// Close all modals
	function closeModal() {
		modalWrap.classList.add('hidden')
		productModal.classList.add('hidden')
		deliveryModal.classList.add('hidden')
		document.body.classList.remove('modal-open')
	}

	closeBtns.forEach(btn => btn.addEventListener('click', closeModal))

	modalWrap.addEventListener('click', e => {
		if (e.target === modalWrap) closeModal()
	})

	// Checkboxes logic
	checkboxes.forEach(cb => {
		cb.addEventListener('change', () => {
			const anyChecked = [...checkboxes].some(cb => cb.checked)
			placeOrderBtn.disabled = !anyChecked

			cb.closest('.modal__item')?.classList.toggle('selected', cb.checked)
		})
	})

	// Switch to delivery modal
	placeOrderBtn.addEventListener('click', () => {
		productModal.classList.add('hidden')
		deliveryModal.classList.remove('hidden')
		checkDeliveryForm()
	})

	// Form validation
	function checkDeliveryForm() {
		const allFilled = [...formInputs].every(input => input.value.trim() !== '')
		submitOrderBtn.disabled = !allFilled
	}

	formInputs.forEach(input => {
		input.addEventListener('input', checkDeliveryForm)
	})

	function resetModals() {
		// Очистити чекбокси
		checkboxes.forEach(cb => {
			cb.checked = false
			cb.closest('.modal__item')?.classList.remove('selected')
		})

		// Заблокувати кнопку
		placeOrderBtn.disabled = true

		// Очистити поля форми
		formInputs.forEach(input => (input.value = ''))

		// Заблокувати кнопку "Rush my Order"
		submitOrderBtn.disabled = true
	}

	// Final submit
	deliveryModal.querySelector('form').addEventListener('submit', e => {
		e.preventDefault()

		const selectedProducts = [...checkboxes]
			.filter(cb => cb.checked)
			.map(cb => cb.value)

		const formData = {}
		formInputs.forEach(input => {
			formData[input.placeholder] = input.value.trim()
		})

		console.log('🛒 Selected Products:', selectedProducts)
		console.log('📦 Delivery Info:', formData)

		closeModal()
		resetModals() // <== додано сюди
	})
})
