//const API_KEY = "d154e65a31cc688f67792c72552ddafc";
window.addEventListener("load", () => {
  let lat;
  let lon;
  let tempValor = document.getElementById("temp-valor");
  let tempDesc = document.getElementById("temp-desc");
  let ubicacion = document.getElementById("ubicacion");
  let iconoAnim = document.getElementById("icono-anim");
  let velocViento = document.getElementById("veloc-viento");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      //ubicación actual    
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d154e65a31cc688f67792c72552ddafc`;

      console.log(url);

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let temp = Math.round(data.main.temp);
          tempValor.textContent = `${temp} ºC`;

          let desc = data.weather[0].description;
          tempDesc.textContent = desc.toUpperCase();

          ubicacion.textContent = data.name;

          velocViento.textContent = `${data.wind.speed} m/s`;

          switch (data.weather[0].main) {
            case "Thunderstorm":
              iconoAnim.src = "animated icons/thunder.svg";
              break;
            case "Drizzle":
              iconoAnim.src = "animated icons/rainy-2.svg";
              break;
            case "Rain":
              iconoAnim.src = "animated icons/rainy-7.svg";
              break;
            case "Snow":
              iconoAnim.src = "animated icons/snowy-6.svg";
              break;
            case "Clear":
              iconoAnim.src = "animated icons/day.svg";
              break;
            case "Atmosphere":
              iconoAnim.src = "animated icons/weather.svg";
              break;
            case "Clouds":
              iconoAnim.src = "animated icons/cloudy-day-1.svg";
              break;
            default:
              iconoAnim.src = "animated icons/cloudy-day-1.svg";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
});
