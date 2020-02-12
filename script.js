async function fetchWeatherData(location) {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + `${location}` + '&APPID=c905db381813af430e27cba76dfd46f7', { mode: 'cors' })
  const jsonData = await response.json();
  return jsonData;
}

async function updateDisplays(location) {
  let jsonData = await fetchWeatherData(location).catch(err => console.log(err))
  console.log(jsonData);

  let fahrenTemp = Math.round((jsonData.main.temp - 273.15) * (9 / 5) + 32);
  displays.temperature.textContent = `Current Temp: ${fahrenTemp}\u00B0F`
  displays.location.textContent = `City: ${jsonData.name}`;
}

const searchControl = {
  cityField: document.querySelector('#search-city'),
  countryField: document.querySelector('#search-country'),
  submitButton: document.querySelector('#search-submit'),

  formatInput: function () {
    let city = this.cityField.value.trim();
    let country = this.countryField.value.trim();
    let formattedLocation = city + ',' + country;
    return formattedLocation
  },

  bindButton: function () {
    this.submitButton.addEventListener('click', () => {
      let location = this.formatInput();
      updateDisplays(location)
    })
  }
}

const displays = {
  location: document.querySelector('#location'),
  temperature: document.querySelector('#temperature'),
}

searchControl.bindButton();
updateDisplays('london, uk');