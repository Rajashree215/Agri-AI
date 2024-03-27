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
import { Modal } from "@mui/material";

export default function Appheader({titlescroll}) {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
  const [openModal, setOpenModal] = React.useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogout=()=>{
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    setOpenModal(false);
    navigate(PATH.LANDINGPAGE);
  }

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
              <Typography variant="caption" sx={{ paddingLeft:'2vw',fontWeight:'bold',fontSize:'1.5rem',fontStyle:'italic',fontFamily:'Baskerville Old Face',color:"#006a61" }}>
                {titlescroll}
              </Typography>
            </Typography>
            {/* {isLoggedIn ? ( */}
            {localStorage.getItem("email") ? (
              <IconButton
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <img src={avatar} alt="" height={45} width={45} />
              </IconButton>
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
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "55%",
            transform: "translate(-50%, -50%)",
            width: 225,
            bgcolor: "#fff",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            borderRadius: 5,
          }}
        >
          <Typography
            id="modal-modal-title"
            component="h2"
            sx={{ fontSize: 16, color: "GrayText", fontWeight: 600 }}
          >
            Are you sure you want to log out?
          </Typography>
          <Button
            onClick={handleLogout}
            sx={{ mt: 2, mr: 2, color: "#5C8D89" }}
            textTransform="none"
          >
            Log out
          </Button>
          <Button onClick={handleCloseModal} sx={{ mt: 2, color: "grey" }}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </AppheaderStyles>
  );
}
