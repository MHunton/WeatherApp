class Weather {
    constructor(city) {
        this.apikey = '';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        if(this.city === null) {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apikey}&q=auto:ip&aqi=no`);

            const responseData = await response.json();

            return responseData;
        } else {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apikey}&q=${this.city}&aqi=no`);
            
            const responseData = await response.json();
            
            return responseData;
        }    
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}