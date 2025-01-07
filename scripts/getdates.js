let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;

//Last Modified Display
function displayLastModified() {
    let lastModified = new Date(document.lastModified);
    let formattedDate = lastModified.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('lastmodified').textContent = 'Last modified: ' + formattedDate;
}

window.onload = displayLastModified;