document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value.trim();
    if (city) {
      getWeather(city);
    }
  });
  
  async function getWeather(city) {
    const apiKey = '274763bffcd86f39781c56f9bc30afff'; // You can get this from OpenWeatherMap or any other weather API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        // Successful API call
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('weather-description').textContent = data.weather[0].description;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  
        // Update weather icon
        const iconCode = data.weather[0].icon;
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${iconCode}.png`;
  
        document.getElementById('error-message').textContent = ''; // Clear error
      } else {
        // If the city is not found or another error occurs
        document.getElementById('error-message').textContent = 'City not found!';
      }
    } catch (error) {
      document.getElementById('error-message').textContent = 'Error fetching data. Please try again later.';
    }
  }
  