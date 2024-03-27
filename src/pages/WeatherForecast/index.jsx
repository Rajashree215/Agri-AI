import React, { useEffect, useState } from "react";
import weatherforecastbg from "../../assets/bgimgs/weatherforecastbg.png";
import Appheader from "../../components/common/Appheader";
import CategoryHeader from "../../components/CategoryHeader";
import { WeatherCardData } from "./data";
import InfoCard from "../../components/common/InfoCard";
import Footer from "../../components/common/Footer";
import { PageStyles } from "../CropInsights/style";
import { Typography } from "@mui/material";

export default function WeatherForecast() {
  const [titlescroll, setTitlescroll] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 64) {
        setTimeout(() => {
          setTitlescroll("Weather Forecast");
        }, 75);
      } else {
        setTimeout(() => {
          setTitlescroll("");
        }, 75);
      }
    };
  }, []);

  return (
    <PageStyles>
      <Appheader titlescroll={titlescroll} />
      <CategoryHeader
        title="Weather Forecast"
        subtitle="The scientific study of weather and weather forecasting is called meteorology."
        quote='"The sun is shining, the birds are singing, and the forecast is bright with a chance of clear skies."'
        image={weatherforecastbg}
      />

      <Typography variant="body2" className="introtxt">
        A weather forecast is a prediction or estimation of the atmospheric
        conditions expected to occur at a particular location over a specified
        period of time in the future. It typically includes information about
        temperature, humidity, precipitation (rain, snow, etc.), wind speed and
        direction, atmospheric pressure, and cloud cover. Weather forecasts are
        based on meteorological data collected from various sources such as
        satellites, weather stations, radar systems, and computer models. These
        forecasts help individuals, businesses, and governments make informed
        decisions regarding activities that may be affected by weather
        conditions, such as travel, agriculture, construction, and emergency
        preparedness.
      </Typography>

      {WeatherCardData.map((data, index) => (
        <InfoCard
          title={data.title}
          info={data.info}
          image={data.image}
          index={index}
        />
      ))}

      <Footer />
    </PageStyles>
  );
}
