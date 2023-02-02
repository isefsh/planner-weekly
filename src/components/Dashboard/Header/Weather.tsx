import React from "react";
import axios, { AxiosError } from "axios";
import { AppContext } from "../../../context/ApplicationContext";
import { WeatherProps } from "../../../interfaces/Interfaces";
import Icon from "../../../assets/imgs/weather-icon.svg"
import { StyledWeather, WeatherWrapper } from "../../../assets/styles/Global.styles";

const Weather = () => {
  const myAPIKey: string = "28272ea1cee8074586ce4325ff060c94";

  const [isCityValid, setIsCityValid] = React.useState<boolean>(true);
  const [weatherData, setWeatherData] = React.useState<WeatherProps>();
  const { enteredUser } = React.useContext(AppContext);

  
  async function fetchingWeather() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${enteredUser.enteredCity}&units=metric&appid=${myAPIKey}`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      }
    }).then((data) => {
      setWeatherData(data.data.main.temp);
    }).catch((error: AxiosError) => {
      error !== null && setIsCityValid(false);
    });
  }

  React.useEffect(() => {
    fetchingWeather()
  }, [enteredUser.enteredCity]);

  return (
    <WeatherWrapper>
      <h6>{enteredUser.enteredCity} - {enteredUser.enteredCountry}</h6>
      <StyledWeather>
        <img src={Icon} alt="Weather's Icon" />
        {isCityValid ? `${Number(weatherData).toFixed(0)}` : "Location not found!"}
      </StyledWeather>
    </WeatherWrapper>
  );
};

export default Weather;