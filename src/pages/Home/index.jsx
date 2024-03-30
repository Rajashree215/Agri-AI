import React, { useEffect, useState } from "react";
import Appheader from "../../components/common/Appheader";
import TextInput from "../../components/common/TextInput";
import WeatherCard from "../../components/WeatherCard";
import Footer from "../../components/common/Footer";
import { Box, Button, Typography } from "@mui/material";
import farmericon from "../../assets/bgimgs/farmericon.png";
import { HomeStyles } from "./style";
import { pagedata } from "./data";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { weatherapiurl } from "../../ApiUrl/WeatherApi";

export default function Home() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [list, setList] = useState([]);
  const [weather, setWeather] = useState("");
  const [today, setToday] = useState("");
  const [temperature, setTemperature] = useState();

  const getWeatherData = async () => {
    const res = await axios.get(weatherapiurl);
    const tday = new Date(res.data.list[0].dt * 1000).toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "2-digit",
        year: "numeric",
      }
    );
    setCity(res.data.city.name);
    setList(res.data.list);
    setWeather(res.data.list[0].weather[0].main);
    setTemperature(Math.round(res.data.list[0].main.temp));
    setToday(tday);
  };

  const convertToDate = (time) => {
    let newDate = new Date(time * 1000);
    return newDate.toISOString().split("T")[0];
  };

  const groupByDay = (forecasts) => {
    let dailyForecast = {};
    forecasts.map((forecast) => {
      let date = convertToDate(forecast.dt);
      if (!dailyForecast[date]) {
        dailyForecast[date] = [];
      }
      dailyForecast[date].push(forecast);
    });
    return dailyForecast;
  };

  const calculateDailyData = (dailyForecasts) => {
    let dailyData = {};

    for (let date in dailyForecasts) {
      let forecasts = dailyForecasts[date];
      let totalTemp = 0;
      let minTemp = Infinity;
      let maxTemp = -Infinity;
      let iconCount = {};
      let maxCount = 0;
      let commonIcon = null;

      forecasts.map((forecast) => {
        totalTemp += forecast.main.temp;
        minTemp = Math.min(minTemp, forecast.main.temp_min);
        maxTemp = Math.max(maxTemp, forecast.main.temp_max);

        let icon = forecast.weather[0].icon;
        iconCount[icon] = (iconCount[icon] || 0) + 1;

        if (iconCount[icon] > maxCount) {
          maxCount = iconCount[icon];
          commonIcon = icon;
        }
      });

      let avgTemp = totalTemp / forecasts.length;

      dailyData[date] = {
        temp: `${Math.round(avgTemp)}°`,
        min: `${Math.round(minTemp)}°`,
        max: `${Math.round(maxTemp)}°`,
        icon: `https://openweathermap.org/img/w/${commonIcon}.png`,
        day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
      };
    }
    return dailyData;
  };

  const dataGroup = groupByDay(list);
  const values = calculateDailyData(dataGroup);

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <HomeStyles>
      <Appheader /> {/* header */}
      <Box className="headerbox">
        <img src={farmericon} alt="" className="farmericon" />
        <Box className="chatbox">
          <Typography variant="body2" className="chat-typo">
            I will advise you in English or your language, I will surprise you!
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "2vh 1vw",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <TextInput
              type="text"
              size="small"
              value="I'm your AI Assistant. Ask me some questions"
              className="chatinput"
              width="88vh"
              borderRadius={0}
              disabled={true}
            />
            <Button variant="contained" className="chatbtn">
              Chat with me
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="ctxtbox">
        <Typography className="chattxt">
          <b>Example questions:</b> “How to manage phytophthora capsici in
          pumpkin?” or “What is the nutritiant removal for maize per ton?”
        </Typography>
      </Box>
      <WeatherCard
        today={today}
        city={city}
        weather={weather}
        temperature={temperature}
        WeatherData={Object.values(values)}
      />
      <Box className="categorybox">
        {pagedata.map((page) => (
          <Button
            onClick={() => {
              navigate(page.path);
            }}
          >
            <img src={page.icon} alt="" className="btnimg" />
          </Button>
        ))}
      </Box>
      <Footer />
    </HomeStyles>
  );
}
