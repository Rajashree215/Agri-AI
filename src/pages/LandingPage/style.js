import styled from "@emotion/styled";
import backgroundimg from "../../assets/bgimgs/Background-img.png";
import greenbg from "../../assets/bgimgs/green-bg.png";
import gradientbg from "../../assets/bgimgs/gradientbg.png";

export const Landingpagestyles = styled("div")(({ theme }) => ({
  ".firstbox": {
    overflowX: "hidden",
    backgroundImage: `url(${backgroundimg})`,
    backgroundSize: "cover",
    width: "100dvw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "4vh 0",
  },
  ".typobox": {
    marginTop: "64px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ".title": {
    color: "#5C8D89",
    fontFamily: "Baskerville Old Face",
    letterSpacing: 1.5,
  },
  ".subheading": {
    color: "#74B49B",
    padding: "3vw 8.5vw",
    fontSize: "1rem",
  },
  ".getstarted": {
    textTransform: "none",
    backgroundColor: "#5C8D89",
    paddingLeft: "3vw",
    paddingRight: "3vw",
    borderRadius: "1.5rem",
    "&:hover": {
      backgroundColor: "#436865",
    },
  },
  ".landingimg": {
    height: "65vh",
    width: "50vw",
    padding: "13vh 0 0 0",
  },
  ".secondbox": {
    backgroundImage: `url(${greenbg})`,
    backgroundSize: "cover",
    width: "100dvw",
  },
  ".quote-txt": {
    textAlign: "center",
    color: "#fff",
    padding: "10vh 19vw",
    lineHeight: "1.8",
    fontFamily: "Palatino Linotype",
    fontWeight: "bold",
  },
  ".thirdbox": {
    backgroundImage: `url(${gradientbg})`,
    backgroundSize: "cover",
    width: "100dvw",
  },
  ".service-typo": {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    padding: "6vh",
  },
  ".servicebox": {
    width: "100dvw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "5vw 10vw",
    padding: "1vh 1vh 10vh 1vh",
  },
  ".fourthbox": {
    display: "flex",
    justifyContent: "center",
    padding: "7vh 0",
  },
  ".groupimg": {
    width: "70dvw",
  },
}));
