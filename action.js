//feature 1
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let today = document.querySelector("#today");
today.innerHTML = day;
let hour = now.getHours();
let minutes = now.getMinutes();
let clock = document.querySelector("#clock");
clock.innerHTML = ` ${hour}:${minutes}`;
//feature 2
function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let tehran = document.querySelector("#tehran");
  tehran.innerHTML = `${city.value}`;
}
let search = document.querySelector(".d-flex");
search.addEventListener("submit", showCity);

//week5-homework- task
function showResponse(response) {
  console.log(response);
  document.querySelector("#tehran").innerHTML = response.data.name;

  document.querySelector("#seventeen").innerHTML = Math.round(
    response.data.main.temp
  );
  let humid = (document.querySelector(
    "#humid"
  ).innerHTML = `Humidity: ${response.data.main.humidity}%`);
  let wind = (document.querySelector("#wind").innerHTML = `Wind:
    ${Math.round(response.data.wind.speed)}`);

  let description = (document.querySelector("#description").innerHTML =
    response.data.weather[0].description);
}

function showDetail(city) {
  let apiKey = "6782253072f7d90462731a624097fc54";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showResponse);
}

function showTemp(event) {
  event.preventDefault();
  let eachCity = document.querySelector("#city").value;
  showDetail(eachCity);
}
let input = document.querySelector(".d-flex");
input.addEventListener("submit", showTemp);

let currentButton = document.querySelector("#current-button");
function displayCurrentLocation(position) {
  let apiKeys = "6782253072f7d90462731a624097fc54";
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiUrls = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeys}&units=metric`;
  axios.get(apiUrls).then(showResponse);
}
function displayCurrent() {
  navigator.geolocation.getCurrentPosition(displayCurrentLocation);
}
currentButton.addEventListener("click", displayCurrent);
