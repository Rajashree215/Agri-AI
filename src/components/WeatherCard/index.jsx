import React, { useEffect, useState } from "react";
import { WeatherStyles } from "./style";
import clearr from "../../assets/weathericons/clear-r.png";
import rainyr from "../../assets/weathericons/rainy-r.png";
import cloudyr from "../../assets/weathericons/cloudy-r.png";
import thunderstormr from "../../assets/weathericons/thunderstorm-r.png";
import { Box, Card, Typography } from "@mui/material";

export default function index({
  today,
  city,
  weather,
  temperature,
  WeatherData,
}) {
  const [mainimg, setMainimg] = useState(null);

  useEffect(() => {
    const imgoptions = {
      Clear: clearr,
      Cloudy: cloudyr,
      Rain: rainyr,
      Thunderstorm: thunderstormr,
    };

    if (weather in imgoptions) {
      setMainimg(imgoptions[weather]);
    } else {
      setMainimg(imgoptions["Cloudy"]);
    }
  }, [weather]);

  return (
    <WeatherStyles>
      <Card className="card">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography className="datetypo">{today}</Typography>
            <Typography className="datetypo">{city} </Typography>
          </Box>
          <img src={mainimg} alt="" className="weathericon" />
        </Box>

        <Box>
          <Typography
            sx={{ textAlign: "center", fontWeight: "normal" }}
            variant="h6"
          >
            {weather}
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontWeight: "normal" }}
            variant="h1"
          >
            {temperature}°
          </Typography>

          <Box sx={{ display: "flex", gap: "2vw" }}>
            {WeatherData.map((data) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3vh",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <img src={data.icon} alt="" height={40} width={40} />
                <Typography
                  sx={{
                    color: "#5C8D89",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                  variant="body2"
                >
                  {" "}
                  {data.day}{" "}
                </Typography>
                <Typography sx={{ color: "#5C8D89" }} variant="body2">
                  {" "}
                  {data.max}{" "}
                </Typography>
                <Typography variant="body2"> {data.temp} </Typography>
                <Typography sx={{ color: "#5C8D89" }} variant="body2">
                  {" "}
                  {data.min}{" "}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Card>
    </WeatherStyles>
  );
}
