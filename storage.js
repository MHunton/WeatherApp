class Storage {
    constructor() {
        this.city;
        this.state;
    }

    getLocationData() {
        this.city = localStorage.getItem('city');

        return {
            city: this.city
        }
    }

    setLocationData(city) {
        localStorage.setItem('city', city);
    }
}