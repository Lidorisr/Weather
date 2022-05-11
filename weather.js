class Weather {
	constructor(city, countryCode) {
		this.apiKey = '6cd91d02ddab01c3da08b3785bd43fb9';
		this.city = city;
		this.countryCode = countryCode;
	}

	// Fetch weather from API
	async getWeather() {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`);
		const responseData = await response.json();
		return responseData
	}

	// Change weather location
	changeLocation(city, countryCode) {
		this.city = city;
		this.countryCode = countryCode;
	}
}