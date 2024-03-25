import styled from "@emotion/styled";
import loginbg from "../../assets/bgimgs/loginbg.png";

export const LoginStyles = styled("div")(() => ({
  ".loginbox": {
    backgroundImage: `url(${loginbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100dvh",
    width: "100dvw",
  },
  ".card": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "55vh",
    backgroundColor: "#fff",
    width: "30vw",
    padding: "3vh",
    position: "absolute",
    top: "15vh",
    right: "15vw",
    borderRadius: "10px",
  },
  ".textinput": {
    color: "#707070",
    width: "20vw",
    borderColor: "#3BB69A",
  },
  ".loginbtn": {
    textTransform: "none",
    width: "70%",
    backgroundColor: "#3BB69A",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#0a9b7a",
    },
  },
}));
