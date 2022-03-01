var userInput = document.getElementById("userInput");
var searchBtn = document.getElementById("searchBtn");
var weatherContent = document.getElementById("weather-content");

searchBtn.addEventListener("click", findWeather);

function weather_function(e) {
  weatherContent.innerHTML = "";
  e.preventDefault();
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=b97038a6315e4c7cb4725000220802&q=${userInput.value}&aqi=no`
  )
    .then((res) => res.json())
    .then((content) => {
      console.log(content);
      let createElem = document.createElement("h1");
      let createLocation = document.createTextNode(content.location.name);
      createElem.appendChild(createLocation);
      createElem.classList.add("stats");
      weatherContent.appendChild(createElem);
      let createElem2 = document.createElement("h1");
      let createFaren = document.createTextNode(
        ` is ${content.current.temp_f}° right now.`
      );
      createElem2.appendChild(createFaren);
      createElem2.classList.add("stats");
      weatherContent.appendChild(createElem2);
    });
}

async function findWeather(e) {
  weatherContent.innerHTML = "";
  e.preventDefault();
  let res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b97038a6315e4c7cb4725000220802&q=${userInput.value}&aqi=no`
  );
  let content = await res.json();
  console.log(content);
  let createElem = document.createElement("h1");
  let createLocation = document.createTextNode(content.location.name);
  createElem.appendChild(createLocation);
  createElem.classList.add("stats");
  weatherContent.appendChild(createElem);
  let createElem2 = document.createElement("h1");
  let createFaren = document.createTextNode(
    ` is ${content.current.temp_f}° right now.`
  );
  createElem2.appendChild(createFaren);
  createElem2.classList.add("stats");
  weatherContent.appendChild(createElem2);
}
