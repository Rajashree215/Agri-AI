import styled from "@emotion/styled";
import loginbg from "../../assets/bgimgs/loginbg.png";

export const FpasswordStyles = styled("div")(({ theme }) => ({
  ".fpwdbox": {
    backgroundImage: `url(${loginbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100dvh",
    width: "100dvw",
  },
  ".card": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "50dvh",
    backgroundColor: "#fff",
    width: "32vw",
    padding: "3vh",
    position: "absolute",
    top: "20vh",
    right: "15vw",
    borderRadius: "10px",
    overflowY: "auto",
  },
  ".textinput": {
    color: "#707070",
    width: "23vw",
    borderColor: "#3BB69A",
  },
  ".submitbtn": {
    textTransform: "none",
    width: "70%",
    backgroundColor: "#3BB69A",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#0a9b7a",
    },
  },
  '.typoclass':{
    color:'#147145',
  }
}));
