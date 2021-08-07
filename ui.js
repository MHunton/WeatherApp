class UI {
    constructor() {
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.details = document.querySelector('#w-details');
        this.icon = document.querySelector('#w-icon');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.humidity = document.querySelector('#w-humidity');
        this.wind = document.querySelector('#w-wind');
        this.windDir = document.querySelector('#w-wind-dir');
    }

    paint(weather) {
        this.location.textContent = `${weather.location.name}, ${weather.location.country}`;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = `${weather.current.temp_c}\u00B0C/${weather.current.temp_f}\u00B0F`;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.feelsLike.textContent = `Feels like: ${weather.current.feelslike_c}\u00B0C/${weather.current.feelslike_f}\u00B0F`
        this.humidity.textContent = `Humidity: ${weather.current.humidity}%`
        this.wind.textContent = `Wind Speed: ${weather.current.gust_mph}mph`
        this.windDir.textContent = `Wind Direction: ${weather.current.wind_dir}`
    }
}