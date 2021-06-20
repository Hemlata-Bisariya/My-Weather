const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

const HiddenSection = document.querySelector("#hiddenSection");
const WeatherBlock = document.querySelector("#weatherBlock");
const Name = document.querySelector(".name");
const Region = document.querySelector(".region");
const Country = document.querySelector(".country");
const WeatherIcon = document.querySelector(".weather-icon");
const Temperature = document.querySelector(".temperature");
const WeatherDescription = document.querySelector(".weatherDescription");
const Humidity = document.querySelector(".humidity");
const FeelsLike = document.querySelector(".feelslike");
const UVIndex = document.querySelector(".uvIndex");
const Visibility = document.querySelector(".visibility");
const WindSpeed = document.querySelector(".windSpeed");
const Pressure = document.querySelector(".pressure");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageTwo.textContent = "";

  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageTwo.textContent = data.error;
        } else {
          Name.textContent = data.address;
          Region.textContent = data.forecast.location.region;
          Country.textContent = data.forecast.location.country;

          let icon = data.forecast.current.weather_icons[0];
          WeatherIcon.setAttribute("src", icon);
          Temperature.textContent = data.forecast.current.temperature + " °C";
          WeatherDescription.textContent = data.forecast.current.weather_descriptions[0];

          Humidity.textContent = data.forecast.current.humidity + " %";
          FeelsLike.textContent = data.forecast.current.feelslike + " °C";

          let uvindex = data.forecast.current.uv_index;
          if(uvindex>=0 && uvindex<=2){
            uvindex = "Low";
          } else if(uvindex>=3 && uvindex<=5) {
            uvindex = "Moderate";
          } else if(uvindex>=6 && uvindex<=7) {
            uvindex = "High";
          } else if(uvindex>=8 && uvindex<=10) {
            uvindex = "Very High";
          } else {
            uvindex = "Extreme";
          }

          UVIndex.textContent = uvindex;
          Visibility.textContent = data.forecast.current.visibility + " KM";
          WindSpeed.textContent = data.forecast.current.wind_speed + " KMPH";
          Pressure.textContent = data.forecast.current.pressure + " MB";
        }
      });
      HiddenSection.removeAttribute("hidden");
    }
  );
});
