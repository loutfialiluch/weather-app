import axios from "axios";

const API_KEY = "GET_YOUR_API_KEY"; // OpenWeatherMap API;

export const getWeather = async (city) => {
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  const { main, sys, clouds, wind } = data;
  const { weather } = data;
  return {
    main: weather[0].main,
    cityName: data.name,
    description: weather[0].description,
    temperature: main.temp,
    humidity: main.humidity,
    pressure: main.pressure,
    minTemperature: main.temp_min,
    maxTemperature: main.temp_max,
    clouds: clouds.all,
    windSpeed: wind.speed,
    windDegree: wind.deg,
    countryFlagCode: sys.country,
  };
};
