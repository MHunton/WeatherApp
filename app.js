// Init weather object
const weather = new Weather('London');
// Init ui object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#city').value;

    weather.changeLocation(`${city}`);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide')
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err));
}