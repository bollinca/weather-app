async function fetchWeatherData() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c905db381813af430e27cba76dfd46f7', { mode: 'cors' })
  const jsonData = await response.json();
  return jsonData;
}

async function updateDisplays() {
  let jsonData = await fetchWeatherData().catch(err => console.log(err))
  console.log(jsonData);

  let fahrenTemp = Math.round((jsonData.main.temp - 273.15) * (9 / 5) + 32);
  displays.temperature.textContent = `Current Temp: ${fahrenTemp}\u00B0F`
  displays.location.textContent = `City: ${jsonData.name}`;
}

const buttonControl = {

  formatInput: function () {
    let currentValue = search.field.value;
    let noCommaValue = currentValue.trim().replace(',', '');
    let formattedValue = noCommaValue.replace(/\s/g, ',');
    return formattedValue
  },

  bindButton: function () {
    search.submitButton.addEventListener('click', () => {
      let value = this.formatInput();
      console.log(value);
    })
  }
}

const displays = {
  location: document.querySelector('#location'),
  temperature: document.querySelector('#temperature'),
}

const search = {
  field: document.querySelector('#search'),
  submitButton: document.querySelector('#search-submit'),
}

buttonControl.bindButton();
updateDisplays();