const API_KEY = "3dbc53889d33570321586b25e8522855";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.getElementById("weather-container");
            const weather = document.createElement("div");
            weather.classList.add("weather");

            // Weather emoji mapping
            const weatherEmoji = {
                'Clear': '☀️',
                'Clouds': '☁️',
                'Rain': '🌧️',
                'Drizzle': '🌦️',
                'Thunderstorm': '⛈️',
                'Snow': '❄️',
                'Mist': '🌫️',
                'Fog': '🌫️',
                'Haze': '🌫️'
            };

            const emoji = weatherEmoji[data.weather[0].main] || '🌡️';
            weather.innerHTML = `
                <span>${emoji}</span>
                <span>${data.name}</span>
                <span>${Math.round(data.main.temp)}°C</span>
            `;
            weatherContainer.appendChild(weather);
        });
}

function onGeoError() {
    console.log("Location access denied. Weather not available.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);