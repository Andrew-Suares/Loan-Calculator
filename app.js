// Listen for submits step 1
document
	.querySelector('#loan-form')
	.addEventListener('submit', calculateResults)

// Calculate results Function step 2

function calculateResults(e) {
	// UI Variables Step 3
	const amount = document.querySelector('#amount')
	const interest = document.querySelector('#interest')
	const years = document.querySelector('#years')
	const monthlyPayment = document.querySelector('#monthly-payment')
	const totalPayment = document.querySelector('#total-payment')
	const totalInterest = document.querySelector('#total-interest')
	// Calculations Step 4
	// ! parse float changes it to a decimal
	const principal = parseFloat(amount.value)
	const calculatedInterest = parseFloat(interest.value) / 100 / 12
	e.preventDefault()
}
