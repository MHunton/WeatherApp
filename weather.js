class Weather {
    constructor(city) {
        this.apikey = '02fed1624d974abea38125318210708';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apikey}&q=${this.city}&aqi=no`);
        
        const responseData = await response.json();
        
        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}