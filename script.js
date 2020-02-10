async function fetchWeatherData() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c905db381813af430e27cba76dfd46f7', { mode: 'cors' })
  const jsonData = await response.json();
  return jsonData;
}

async function updateDisplays() {
  let jsonData = await fetchWeatherData().catch(err => console.log(err))
  console.log(jsonData);
  displays.location.textContent = `City: ${jsonData.name}`;
  displays.temperature.textContent = `Current Temp: ${jsonData.main.temp}\u00B0K`
}

const displays = {
  location: document.querySelector('#location'),
  temperature: document.querySelector('#temperature'),
}

updateDisplays();