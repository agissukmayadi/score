let p1Display = document.querySelector('#p1Display')
let p2Display = document.querySelector('#p2Display')

let p1Button = document.querySelector('#p1Button')
let p2Button = document.querySelector('#p2Button')

let resetButton = document.querySelector('#resetButton')

let p1Score = 0
let p2Score = 0

let isGameOver = true
let winPoint

let winPointOption = document.querySelector('#winPointOption')
btnDisabled()

winPointOption.addEventListener('change', function () {
	winPoint = this.value
	isGameOver = false
	resetScore()
	btnEnabled()
})

function btnDisabled() {
	p1Button.setAttribute('disabled', true)
	p2Button.setAttribute('disabled', true)
}

function btnEnabled() {
	p1Button.removeAttribute('disabled')
	p2Button.removeAttribute('disabled')
}


p1Button.addEventListener('click', function () {
	if (isGameOver === false) {
		p1Score += 1
		if (p1Score == winPoint) {
			isGameOver = true
			p1Display.classList.add('text-success')
			btnDisabled()
		}
	}
	p1Display.innerText = p1Score
})

p2Button.addEventListener('click', function () {
	if (isGameOver === false) {
		p2Score += 1
		if (p2Score == winPoint) {
			isGameOver = true
			p2Display.classList.add('text-success')
			btnDisabled()
		}
	}
	p2Display.innerText = p2Score
})

function resetScore() {
	p1Display.classList.remove('text-success')
	p2Display.classList.remove('text-success')
	p1Score = 0
	p2Score = 0
	p1Display.innerText = p1Score
	p2Display.innerText = p2Score
}

resetButton.addEventListener('click', function () {
	isGameOver = true
	resetScore()
	btnDisabled()
	winPointOption[0].removeAttribute('selected')
	winPointOption[0].setAttribute('selected', true)
})