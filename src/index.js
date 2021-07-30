let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let now = new Date();
let day = days[now.getDay()];
let month = months[now.getMonth()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let date = now.getDate();
let time = now.getHours() + ":" + now.getMinutes();

function formatDate(today) {
  day = days[now.getDay()];
  month = months[now.getMonth()];
  date = now.getDate();
  time = now.getHours() + ":" + now.getMinutes();

  today = `${day}, ${month} ${date}, ${time}`;

  return today;
}
let moment = document.querySelector("#today-time");
moment.innerHTML = formatDate(new Date());

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function convertToFahrenheit(value) {
  value.preventDefault();
  let valueElement = document.querySelector("#current-value");
  let temperature = valueElement.innerHTML;
  temperature = Number(temperature);
  valueElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let valueElement = document.querySelector("#current-value");
  valueElement.innerHTML = 32;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);