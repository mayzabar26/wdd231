//Replace with your OpenWeatherMap API key
const apiKey = '4d018f8f77fe08ded306298c094481be';
const city = 'Sao Luis'; //Replace with your chamber location
const units = 'imperial'; //Use 'metric' for Celsius, 'imperial' for Fahrenheit
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

//Function to fetch and display current weather data
async function getWeather() {
  try {
    const response = await fetch(weatherApiUrl);
    const weatherData = await response.json();

    //Extract relevant data
    const temperature = weatherData.main.temp.toFixed(1);
    const description = weatherData.weather[0].description;
    const high = weatherData.main.temp_max.toFixed(1);
    const low = weatherData.main.temp_min.toFixed(1);
    const humidity = weatherData.main.humidity;
    const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();
    const iconCode = weatherData.weather[0].icon; // Icon code from the API
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // URL for the icon

    //Update Current Weather Section
    document.querySelector('.current-weather .content').innerHTML = `
      <p><img src="${iconUrl}" alt="${description}" width="50"></p>
      <p><strong>${temperature}°F</strong></p>
      <p>${description.charAt(0).toUpperCase() + description.slice(1)}</p>
      <p>High: ${high}°F</p>
      <p>Low: ${low}°F</p>
      <p>Humidity: ${humidity}%</p>
      <p>Sunrise: ${sunrise}</p>
      <p>Sunset: ${sunset}</p>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

//Function to fetch and display 3-day weather forecast
async function getForecast() {
  try {
    const response = await fetch(forecastApiUrl);
    const forecastData = await response.json();

    //Filter the data to show only one forecast per day (e.g., midday data)
    const forecastList = forecastData.list.filter(item =>
      item.dt_txt.includes('12:00:00')
    );

    //Update Weather Forecast Section
    const forecastContainer = document.querySelector('.weather-forecast .content');
    forecastContainer.innerHTML = ''; //Clear existing content

    forecastList.slice(0, 3).forEach(day => {
      const date = new Date(day.dt * 1000).toLocaleDateString('en-US', {
        weekday: 'long'
      });
      const temp = day.main.temp.toFixed(1);
      const iconCode = day.weather[0].icon; //Icon code from the forecast data
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // URL for the icon

      forecastContainer.innerHTML += `
        <p>
          ${date}: <img src="${iconUrl}" alt="Weather icon for ${date}" width="40"> 
          <strong>${temp}°F</strong>
        </p>
      `;
    });
  } catch (error) {
    console.error('Error fetching forecast data:', error);
  }
}

//Initialize functions
getWeather();
getForecast();