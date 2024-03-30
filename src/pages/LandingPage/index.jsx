import React from "react";
import Appheader from "../../components/common/Appheader";
import { Box, Button, Typography } from "@mui/material";
import { Landingpagestyles } from "./style";
import landingimg from "../../assets//bgimgs/person-utilizing-ai-.png";
import groupimg from '../../assets/bgimgs/groupimg.png';
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/routerConstant";
import { services } from "./data";
import ServiceCard from "../../components/common/ServiceCard";
import Footer from "../../components/common/Footer";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Landingpagestyles>
      {/* header */}
      <Appheader />

      {/* body */}
      <Box className="firstbox">
        <Box className="typobox">
          <Typography variant="h2" className="title">
            Growing Greener
          </Typography>
          <Typography variant="body2" className="subheading">
            Welcome to the heart of agricultural innovation, where the fertile
            fields of tradition intersect with the cutting-edge landscapes of
            technology.
          </Typography>
          <Button
            variant="contained"
            className="getstarted"
            onClick={() => {
              navigate(PATH.SIGNUP);
            }}
          >
            Get Started
          </Button>
        </Box>
        <img src={landingimg} alt="" className="landingimg" />
      </Box>

      <Box className="secondbox">
        <Typography variant="h4" className="quote-txt">
          "Cultivating success from seed to harvest, we provide unparalleled
          agricultural services tailored to your needs."
        </Typography>
      </Box>

      <Box className="thirdbox">
        <Typography variant="h5" className="service-typo">
          Our Services
        </Typography>
        <Box className="servicebox">
          {services.map(({ title, icon, description }) => (
            <ServiceCard title={title} icon={icon} description={description} />
          ))}
        </Box>
      </Box>

      <Box className="fourthbox">
        <img src={groupimg} alt="" className="groupimg"/>
      </Box>

      {/* footer */}
      <Footer/>
    </Landingpagestyles>
  );
}
