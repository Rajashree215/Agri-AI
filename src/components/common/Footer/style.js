import styled from "@emotion/styled";
import footerbg from "../../../assets/bgimgs/footerbg.png";

export const FooterStyles = styled("div")(({ theme }) => ({
  ".footerbox": {
    backgroundImage: `url(${footerbg})`,
    padding: "5vh 0 4vh 0",
  },
  ".logobox": {
    display: "flex",
    gap: "2vw",
    alignItems: "center",
    padding: ".5vh 6vw",
  },
  ".input": {
    backgroundColor: "#fff",
    padding: "2px 0 2px 2px",
    outline: "none",
  },
  ".contactus": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4vh",
  },
  ".socials": {
    display: "flex",
    gap: ".5vw",
  },
}));
