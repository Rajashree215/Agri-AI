import styled from "@emotion/styled";

export const AppheaderStyles = styled("div")(({ theme }) => ({
  ".appbar": {
    backgroundColor: "#F9F8EB",
    boxShadow:'none',
    position:'fixed',
    zIndex:2,
    minHeight:'10vh'
  },
  ".header-typo": {
    color: "#005951",
    fontSize: "1.1rem",
  },
  ".login-btn": {
    textTransform: "none",
    color: "#74B49B",
    position:'relative',
    right:'1vw',
  },
  ".signin-btn": {
    backgroundColor: "#5C8D89",
    textTransform: "none",
    padding: "1vh 2.5vw",
    color: "#fff",
    '&:hover':{
    backgroundColor:"#436865"
    }
  },
}));
