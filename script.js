async function fetchWeatherData() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c905db381813af430e27cba76dfd46f7', { mode: 'cors' })
  const jsonData = await response.json();
  console.log(jsonData.main);
  console.log(jsonData.name);
  console.log(jsonData.weather[0].main);
}

const displays = {
  location: document.querySelector('#location'),
  temperature: document.querySelector('#temperature'),
}

fetchWeatherData().catch(err => console.log(err));