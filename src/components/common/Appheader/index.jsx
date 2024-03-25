import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../../assets/logo.png";
import avatar from "../../../assets/avatar.png";
import { AppheaderStyles } from "./style";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constants/routerConstant";
import { AuthContext } from "../../../context/AuthContextProvider";

export default function Appheader() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <AppheaderStyles>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="appbar">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                if (isLoggedIn === true) {
                  navigate(PATH.HOME);
                }
              }}
            >
              <img src={logo} alt="" height={35} width={85} />
            </IconButton>
            <Typography
              variant="caption"
              component="div"
              className="header-typo"
              sx={{ flexGrow: 1 }}
            >
              Agri AI
            </Typography>
            {isLoggedIn ? (
              <img src={avatar} alt="" height={45} width={45} />
            ) : (
              <>
                <Button
                  color="inherit"
                  onClick={() => {
                    navigate(PATH.LOGIN);
                  }}
                  className="login-btn"
                >
                  Log In
                </Button>
                <Button
                  type="contained"
                  onClick={() => {
                    navigate(PATH.SIGNUP);
                  }}
                  className="signin-btn"
                >
                  Sign up
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </AppheaderStyles>
  );
}
