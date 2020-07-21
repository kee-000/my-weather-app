let currentTime = new Date();

console.log(currentTime);

let h2 = document.querySelector("h2");

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

h2.innerHTML = `${day} ${hours}:${minutes}`;

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temperature}`;
  let city = document.querySelector("#city-input").value;
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${city}`;
}

function getCity(city) {
  let apiKey = "cb17ebd6cdc8b82707ce5e7afe3ad93a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  getCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
