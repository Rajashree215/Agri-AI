import React from "react";
import { WeatherStyles } from "./style";
import weathericon from "../../assets/icons/weather/weathericon.png";
import { Box, Card, Typography } from "@mui/material";
import { weatherdata } from "./data";

export default function index() {
  return (
    <WeatherStyles>
      <Card className="card">

        <Box>
          <Typography className="datetypo" >April 03 , 2024</Typography>
          <Typography className="datetypo" >Kumbakonam, TN </Typography>
          <img src={weathericon} alt="" className="weathericon" />
        </Box>

        <Box>
          <Typography sx={{textAlign:'center',fontWeight:'normal'}} variant="h6" >Partly Cloudy</Typography>
          <Typography sx={{textAlign:'center',fontWeight:'normal'}} variant="h1">27°</Typography>

          <Box sx={{ display: "flex",gap:'2vw' }}>
            {weatherdata.map((data) => (
              <Box sx={{ display: "flex", flexDirection: "column",gap:'3vh',justifyContent:'space-around' }}>
                <img src={data.icon} alt="" height={30} width={35} />
                <Typography sx={{color:'#5C8D89'}} variant="body2"> {data.day} </Typography>
                <Typography variant="body2"> {data.max} </Typography>
                <Typography sx={{color:'#5C8D89'}} variant="body2"> {data.min} </Typography>
              </Box>
            ))}
          </Box>
          
        </Box>
      </Card>
    </WeatherStyles>
  );
}
