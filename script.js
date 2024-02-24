window.onload = function() {
    var apiKey = '6ce691016cd3e7a2231bca1b77066f84';

    document.getElementById('search-btn').addEventListener('click', function() {
        var city = document.getElementById('city-input').value;

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('city').textContent = data.name;
                document.getElementById('temperature').textContent = Math.round(data.main.temp - 273.15) + '°C';
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('humidity').textContent = 'Humidity: ' + data.main.humidity + '%';
                document.getElementById('wind-speed').textContent = 'Wind Speed: ' + data.wind.speed + ' m/s';
            })
            .catch(err => {
                console.error('There has been a problem with your fetch operation: ', err);
            });
    });
};
