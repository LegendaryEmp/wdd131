function calculateWindChill(temperature, windSpeed) {

    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        return temperature;
    }
}

const temperature = 32;
const windSpeed = 13;


const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);


document.getElementById('wind-chill').innerText = `${windChill} °C`;


let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;

function displayLastModified() {
    var lastModified = new Date(document.lastModified);
    var formattedDate = lastModified.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('lastmodified').textContent = 'Last modified: ' + formattedDate;
}

window.onload = displayLastModified;

