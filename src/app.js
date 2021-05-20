// TODO: Build an awesome garage!
const url = 'https://wagon-garage-api.herokuapp.com/top_gear/cars';

// 1. Make a get request using fetch
fetch(url)
	// 2. Parse the JSON response
	.then(response => response.json())
	.then((data) => {
		console.log(data)
		// 3. Iterate through the data
		data.forEach((car) => {
			displayCar(car)
		})
	})

// 4. Insert it into the HTML
const displayCar = (car) => {
	document.querySelector('.cars-list').insertAdjacentHTML('beforeend',
		`<div class="car">
		  <div class="car-image">
		    <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
		  </div>
		  <div class="car-info">
		    <h4>${car.brand} ${car.model}</h4>
		    <p><strong>Owner:</strong> ${car.owner}</p>
		    <p><strong>Plate:</strong> ${car.plate}</p>
		  </div>
		</div>`
	)
}

// 1. Listen for the submission of the form
document.getElementById('new-car').addEventListener('submit', (e) => {
	// 2. Prevent the default behaviour of the form
	e.preventDefault();
	// 3. Create a car variable using the info from the form
	const car = {
		"brand": document.getElementById('brand').value,
    "model": document.getElementById('model').value,
    "owner": document.getElementById('owner').value,
    "plate": document.getElementById('plate').value
	}
	// 4. Make a POST request to the API
	fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(car)
	})
		.then(response => response.json())
		.then((data) => {
			console.log(data)
			displayCar(data)
		})
})























