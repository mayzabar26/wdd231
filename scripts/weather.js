//Step 1: Select all of the HTML elements that we need
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

//Step 2: Creating required variables for the URL
const myKey = "4d018f8f77fe08ded306298c094481be";
const myLat = "49.74892"
const myLong = "6.63715"

//Step 3: Construct a full path using template literals
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

//Step 4: Invoking apiFetsch function
async function apiFetch() {
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  //Step 5: Display the JSON data onto my web page
  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`//For the degrees
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` //For the Icon
    let desc = data.weather[0].description //Weather description
    weatherIcon.setAttribute('SRC', iconsrc) //Weather icon
    weatherIcon.setAttribute('alt', data.weather[0].description)
    captionDesc.textContent = `${desc}`;
  }
  
  apiFetch();
