fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c905db381813af430e27cba76dfd46f7', {mode: 'cors'})
  .then(function(response){
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  })