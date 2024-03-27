import React, { useContext, useState } from "react";
import { LoginStyles } from "./style";
import { Box, Button, Card, Typography } from "@mui/material";
import TextInput from "../../components/common/TextInput";
import { PATH } from "../../constants/routerConstant";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiurl } from "../../ApiUrl";
import { loginData } from "./data";
import { AuthContext } from "../../context/AuthContextProvider";
import Toaster from "../../components/common/Toaster";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    pwd: "",
  });
  const [severity, setSeverity] = useState("");
  const [showToaster, setShowToaster] = useState(false);
  const [msg, setMsg] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const iname = e.target.name;
    const ivalue = e.target.value;
    setLogin((prevData) => ({
      ...prevData,
      [iname]: ivalue,
    }));
  };

  const handleClick = async () => {
    if (
      Object.values(login).filter((item) => item).length !==
      Object.keys(login).length
    ) {
      setSeverity("error");
      setMsg("Enter all the fields!");
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false);
      }, 5000);
    } else {
      const res = await axios.post(`${apiurl}login.php`, {
        email: login.email,
        password: login.pwd,
      });

      if (res.data === "OK") {
        setIsLoggedIn(true);
        setSeverity("success");
        setMsg("Login Success!!");
        setShowToaster(true);
        localStorage.setItem("email", login.email);
        setTimeout(() => {
          navigate(PATH.HOME);
          setShowToaster(false);
        }, 3000);
        setLogin({
          email: "",
          pwd: "",
        });
      } else if (res.data === "INCORRECT") {
        setMsg("Incorrect password");
        setSeverity("error");
        setShowToaster(true);
        setTimeout(() => {
          setShowToaster(false);
        }, 5000);
      } else {
        setMsg("No email found please register");
        setSeverity("error");
        setShowToaster(true);
        setTimeout(() => {
          setShowToaster(false);
        }, 5000);
      }
    }
  };

  return (
    <LoginStyles>
      <Box className="loginbox">
        <Card className="card">
          <Typography variant="h6" sx={{ color: "#3BB69A" }}>
            Log In
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            {loginData.map((input) => (
              <TextInput
                type={input.type}
                label={input.label}
                name={input.name}
                value={login[input.name]}
                size="small"
                className="textinput"
                labelvariant="caption"
                onChange={handleChange}
              />
            ))}
          </Box>

          <Button
            disableRipple
            className="forgetpwd"
            onClick={() => {
              navigate(PATH.FORGOTPASSWORD);
            }}
          >
            <Typography variant="caption">Forget Password</Typography>
          </Button>

          {/* {errormsg && (
            <Typography variant="caption" color="red">
              
            </Typography>
          )} */}

          <Button
            variant="contained"
            className="loginbtn"
            onClick={handleClick}
          >
            Login
          </Button>
        </Card>
      </Box>
      {showToaster && (
        <Toaster show={showToaster} severity={severity} msg={msg} />
      )}
    </LoginStyles>
  );
}
