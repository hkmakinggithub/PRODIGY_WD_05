document.getElementById('getWeather').addEventListener('click', function() {
    var city = document.getElementById('city').value;
    var apiKey = '0bbc525018216fe128002df07d77af7a'; // Replace with your OpenWeatherMap API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === 200) {
                var html = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                weatherInfo.innerHTML = html;
            } else {
                weatherInfo.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            var weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        });
});
