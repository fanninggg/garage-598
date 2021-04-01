// TODO: Build an awesome garage!
const url = 'https://wagon-garage-api.herokuapp.com/525garage/cars'

const displayCar = (car) => {
	// 4. Create a card and add it to the cars-list
	document.querySelector('.cars-list').insertAdjacentHTML('beforeend', 
		`<div class="car">
	    <div class="car-image">
	      <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
	    </div>
	    <div class="car-info">
	      <h4>${car.brand} ${car.model}</h4>
	      <p><strong>Owner:</strong>${car.owner}</p>
	      <p><strong>Plate:</strong>${car.plate}</p>
	    </div>
	  </div>`
	)
}

// 1. Listen for the submission of the form
document.getElementById('new-car').addEventListener('submit', (event) => {
	// 2. Prevent default to stop refresh
	event.preventDefault()
	// 3. Extract the info from the form and make a car variable
	const car = {
		brand: document.getElementById('brand').value,
		model: document.getElementById('model').value,
		owner: document.getElementById('owner').value,
		plate: document.getElementById('plate').value,
	}
	// 4. Make a POST request to the API
	fetch(url, {
		method: "POST",
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify(car)
	})
		.then(response => response.json())
		.then(data => displayCar(data))
})


// 1. Make a get request using fetch
const loadCars = () => {
	fetch(url)
	// 2. Parse JSON response from the API
		.then(response => response.json())
		.then((data) => {
		// 3. Iterate through all my cars
			data.forEach((car) => {
				displayCar(car)
			})
		})
}

loadCars()