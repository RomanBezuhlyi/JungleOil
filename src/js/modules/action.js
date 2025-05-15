document.addEventListener('DOMContentLoaded', () => {
	const hoursElem = document.querySelector(
		'.action__timer-block:nth-child(1) .action__timer-time'
	)
	const minutesElem = document.querySelector(
		'.action__timer-block:nth-child(3) .action__timer-time'
	)
	const secondsElem = document.querySelector(
		'.action__timer-block:nth-child(5) .action__timer-time'
	)

	let totalSeconds = 24 * 60 * 60 // 24 години

	function updateTimer() {
		let hours = Math.floor(totalSeconds / 3600)
		let minutes = Math.floor((totalSeconds % 3600) / 60)
		let seconds = totalSeconds % 60

		hoursElem.textContent = String(hours).padStart(2, '0')
		minutesElem.textContent = String(minutes).padStart(2, '0')
		secondsElem.textContent = String(seconds).padStart(2, '0')

		if (totalSeconds > 0) {
			totalSeconds--
		} else {
			totalSeconds = 24 * 60 * 60 // обнуляємо до 24 годин
		}
	}

	updateTimer() // оновити одразу
	setInterval(updateTimer, 1000) // оновлювати щосекунди
})
