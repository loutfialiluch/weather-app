import React, { useState, useEffect } from "react";
import { getWeather } from "../api";
import Loading from "./Loading";

const Weather = () => {
  const initialWeatherInfo = {
    main: "",
    cityName: "",
    description: "",
    temperature: "",
    humidity: "",
    pressure: "",
    minTemperature: "",
    maxTemperature: "",
    clouds: "",
    windSpeed: "",
    windDegree: "",
    countryFlagCode: "",
  };
  const [backgroundWeatherVideo, setBackgroundWeatherVideo] = useState(
    "/videos/clear.mp4"
  );
  const [query, setQuery] = useState("Rabat");
  const [weatherInfo, setWeatherInfo] = useState(initialWeatherInfo);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const keyPressHandler = async (e) => {
    if (e.key === "Enter") {
      try {
        setError("");
        setLoading(true);
        const data = await getWeather(query);
        setWeatherInfo(data);
        changeBackgroundVideo(data.main);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    // Instant call
    (async () => {
      try {
        setError("");
        setLoading(true);
        const data = await getWeather(query);
        setWeatherInfo(data);
        changeBackgroundVideo(data.main);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    })();
    // eslint-disable-next-line
  }, []);

  const changeBackgroundVideo = (main) => {
    switch (main) {
      case "Clouds": {
        setBackgroundWeatherVideo("/videos/clouds.mp4");
        break;
      }
      case "Clear": {
        setBackgroundWeatherVideo("/videos/clear.mp4");
        break;
      }
      case "Mist": {
        setBackgroundWeatherVideo("/videos/mist.mp4");
        break;
      }
      case "Smoke": {
        setBackgroundWeatherVideo("/videos/smoke.mp4");
        break;
      }
      case "Rain": {
        setBackgroundWeatherVideo("/videos/rain.mp4");
        break;
      }
      case "Snow": {
        setBackgroundWeatherVideo("/videos/snow.mp4");
        break;
      }
      case "Thunderstorm": {
        setBackgroundWeatherVideo("/videos/thunderstorm.mp4");
        break;
      }
      case "Dizzle": {
        setBackgroundWeatherVideo("/videos/dizzle.mp4");
        break;
      }
      default:
        break;
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="weather">
          {/* Background video */}
          <video
            key={backgroundWeatherVideo}
            loop
            autoPlay
            muted
            className="backgroundWeatherVideo"
          >
            <source src={backgroundWeatherVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <main className="container">
            <div className="search">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={keyPressHandler}
                placeholder="Search for a city"
              />
              <button disabled type="button" className="searchBtn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            {error ? (
              <div className="error">
                <h3> :( Oops ! City Not Found</h3>
              </div>
            ) : (
              <>
                <div className="firstInfo">
                  <img
                    src={`https://www.countryflags.io/${weatherInfo.countryFlagCode}/flat/64.png`}
                    alt="country flag"
                    className="countryFlag"
                  />
                  <h3>{weatherInfo.cityName}</h3>
                  <p>Description : {weatherInfo.description}</p>
                </div>
                <div className="secondInfo">
                  <div className="infoItem">
                    <img
                      src="/images/temperature.svg"
                      alt="temperature"
                      className="infoImg"
                    />
                    <h3>Temperature</h3>
                    <h3>{(weatherInfo.temperature - 273.15).toFixed(2)} °C</h3>
                  </div>
                  <div className="infoItem">
                    <img
                      src="/images/humidity.svg"
                      alt="humidity"
                      className="infoImg"
                    />
                    <h3>Humidity</h3>
                    <h3>{weatherInfo.humidity} %</h3>
                  </div>
                  <div className="infoItem">
                    <img
                      src="/images/pressure.svg"
                      alt="pressure"
                      className="infoImg"
                    />
                    <h3>Pressure</h3>
                    <h3>{weatherInfo.pressure} hPA</h3>
                  </div>
                </div>
                <div className="thirdInfo">
                  <div className="infoItem">
                    <img
                      src="/images/min-temperature.svg"
                      alt="minimum temperature"
                      className="infoImg"
                    />
                    <h3>Min. Temperature</h3>
                    <h3>
                      {(weatherInfo.minTemperature - 273.15).toFixed(2)} °C
                    </h3>
                  </div>
                  <div className="infoItem">
                    <img
                      src="/images/max-temperature.svg"
                      alt="maximum temperature"
                      className="infoImg"
                    />
                    <h3>Max. Temperature</h3>
                    <h3>
                      {(weatherInfo.maxTemperature - 273.15).toFixed(2)} °C
                    </h3>
                  </div>
                  <div className="infoItem">
                    <img
                      src="/images/cloud.svg"
                      alt="clouds"
                      className="infoImg"
                    />
                    <h3>Clouds</h3>
                    <h3>{weatherInfo.clouds} %</h3>
                  </div>
                  <div className="infoItem">
                    <img
                      src="/images/windspeed.svg"
                      alt="wind speed"
                      className="infoImg"
                    />
                    <h3>Wind Speed</h3>
                    <h3>{weatherInfo.windSpeed} m/s </h3>
                  </div>
                  <div className="infoItem">
                    <img
                      src="/images/winddegree.svg"
                      alt="wind degree"
                      className="infoImg"
                    />
                    <h3>Wind Degree</h3>
                    <h3>{weatherInfo.windDegree} °</h3>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      )}
    </>
  );
};

export default Weather;
