var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#city");
var skyconditon = document.querySelector("#sky_condition");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

apik = "3045dd712ffe6e702e3245525ac7fa38";

function convertion(val) {
  return (val - 273).toFixed(0);
}
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value +
      "&appid=" +
      apik
  )
    .then((response) => response.json())
    .then((data) => {
      var namevalue = data["name"];
      var skycondi = data.weather[0].description;
      var temperature = data["main"]["temp"];
      var windspeed = data["wind"]["speed"];
      city.innerHTML = ` <span>${namevalue}<span>`;
      temp.innerHTML = ` <span>${convertion(
        temperature
      )}<sup>&#8451;</sup></span>`;
      skyconditon.innerHTML = ` <span>${skycondi}<span>`;
      wind.innerHTML = ` <span>${windspeed} km/h<span>`;
    })
    .catch((err) => alert("You have entered wrong City"));
});
