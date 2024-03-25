import React from "react";
import Appheader from "../../components/common/Appheader";
import TextInput from "../../components/common/TextInput";
import WeatherCard from "../../components/WeatherCard";
import Footer from "../../components/common/Footer";
import { Box, Button, Typography } from "@mui/material";
import farmericon from "../../assets/bgimgs/farmericon.png";
import { HomeStyles } from "./style";
import { pagedata } from "./data";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeStyles>
      <Appheader /> {/* header */}
      <Box className="headerbox">
        <img src={farmericon} alt="" className="farmericon" />
        <Box className="chatbox">
          <Typography variant="body2" className="chat-typo">
            I will advise you in English or your language, I will surprise you!
          </Typography>
          <Box sx={{ display: "flex", gap: "1vw" }}>
            <TextInput
              type="text"
              size="small"
              placeholder="Type your message..."
              className="chatinput"
              fullWidth={true}
              borderRadius={0}
            />
            <Button variant="contained" className="chatbtn">
              Send
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
      <WeatherCard />
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

      <Footer/>

    </HomeStyles>
  );
}
