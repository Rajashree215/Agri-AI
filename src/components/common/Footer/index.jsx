import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import logo from "../../../assets/logo.png";
import fb from '../../../assets/icons/facebook.png';
import gmail from '../../../assets/icons/google.png';
import insta from '../../../assets/icons/instagram.png';
import whatsapp from '../../../assets/icons/whatsapp.png';
import { FooterStyles } from "./style";

export default function Footer() {
  return (
    <FooterStyles>
      <Box className="footerbox">

        <Box className="logobox">
          <img src={logo} alt="" height={45} width={95} />
          <Typography variant="h6">Agri AI</Typography>
        </Box>

        <Box className="contactus">
          <Typography sx={{color:'#5C8D89'}} >SUBSCRIBE TO OUR AGRI AI</Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your mail id"
            size="small"
            className="input"
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    paddingX: "2vw",
                    backgroundColor: "#5C8D89",
                    position:'relative',
                    left:'8px',
                    '&:hover':{
                        backgroundColor:'#436865'
                    }
                  }}
                >
                  Subscribe
                </Button>
              ),
            }}
          />

          <Box className="socials">
            <IconButton> <a href="https://www.facebook.com/"><img src={fb} alt="" height={25} width={25} /></a> </IconButton>
            <IconButton> <a href="mailto:yourmail@abc.com"><img src={gmail} alt="" height={25} width={25} /></a> </IconButton>
            <IconButton> <a href="https://www.instagram.com/"><img src={insta} alt="" height={25} width={25} /></a> </IconButton>
            <IconButton> <a href="https://api.whatsapp.com/send?phone=911234567890"><img src={whatsapp} alt="" height={25} width={25} /></a> </IconButton>
            {/* for whatsapp, give your phone number with country code  
              91-country code
              1234567890-phonenumber
              =>911234567890
            */}
          </Box>

        </Box>
      </Box>
    </FooterStyles>
  );
}
