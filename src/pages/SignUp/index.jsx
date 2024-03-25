import React, { useState } from "react";
import { SignUpStyles } from "./style";
import { Box, Button, Card, Typography } from "@mui/material";
import TextInput from "../../components/common/TextInput";
import { InputData } from "./data";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/routerConstant";
import axios from "axios";
import { apiurl } from "../../ApiUrl";
import Toaster from "../../components/common/Toaster";

export default function SignUp() {
  const [signupdata, setSignupdata] = useState({
    name: "",
    email: "",
    phoneno: "",
    pwd: "",
    cpwd: "",
    city: "",
  });
  const [msg, setMsg] = useState("");
  const [showToaster, setShowToaster] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const iname = e.target.name;
    const ivalue = e.target.value;
    setSignupdata((prevData) => ({
      ...prevData,
      [iname]: ivalue,
    }));
  };

  const handleClick = async () => {
    // navigate(PATH.HOME);

    if (
      Object.values(signupdata).filter((item) => item) !==
      Object.keys(signupdata).length
    ) {
      setMsg("All fields are required");
      setShowToaster(true);
    } else if (signupdata.pwd !== signupdata.cpwd) {
      setMsg("Password and Confirm Password doesn't match");
    } else {
      const res = await axios.post(`${apiurl}signup.php`, {
        name: signupdata.name,
        email: signupdata.email,
        phoneno: signupdata.phoneno,
        pwd: signupdata.pwd,
        city: signupdata.city,
      });
      console.log(res, res.data);
    }

    setSignupdata({
      name: "",
      email: "",
      phoneno: "",
      pwd: "",
      cpwd: "",
      city: "",
    });
  };

  return (
    <SignUpStyles>
      <Box className="signupbox">
        <Card className="card">
          <Typography variant="h6" sx={{ color: "#3BB69A" }}>
            Sign Up
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            {InputData.map((input) => (
              <TextInput
                type={input.type}
                label={input.label}
                name={input.name}
                value={signupdata[input.name]}
                size="small"
                className="textinput"
                labelvariant="caption"
                onChange={handleChange}
              />
            ))}
          </Box>

          <Button
            variant="contained"
            className="signupbtn"
            onClick={handleClick}
          >
            Sign up
          </Button>
        </Card>
      </Box>
      <Toaster show={showToaster} severity="error" msg={msg} />
    </SignUpStyles>
  );
}
