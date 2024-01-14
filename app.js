var apiKey = 'c47475534d85fea6c78695950dc52551';//Enter your API key of open weather

function getData(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    // Reset previous results
    document.getElementById("climate").innerText = "";
    document.getElementById("weather-description").innerText = "";
    document.getElementById("temperature").innerText = "";
    document.getElementById("pressure").innerText = "";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("climate").innerText = "Climate: " + data.weather[0].main;
            document.getElementById("weather-description").innerText = "Weather Description: " + data.weather[0].description;
            document.getElementById("temperature").innerText = "Temperature: " + (data.main.temp - 273.15) + " °C";
            document.getElementById("pressure").innerText = "Pressure: " + data.main.pressure + " hPa";
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("climate").innerText = "Failed to get weather data for " + city + ". Please check the city name.";
        });
}

// Event listener for button click
document.getElementById("getWeatherButton").addEventListener('click', function() {
    var inputCity = document.getElementById("city").value;
    getData(inputCity);
});