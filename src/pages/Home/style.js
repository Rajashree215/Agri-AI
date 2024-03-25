import styled from "@emotion/styled";
import homeheaderbg from "../../assets/bgimgs/homeheaderbg.png";

export const HomeStyles = styled("div")(({ theme }) => ({
  ".headerbox": {
    backgroundImage: `url(${homeheaderbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "11vh 1.5vw 3vh 1.5vw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ".farmericon": {
    // marginTop:'64px',
    height: "18vw",
    width: "26.5vw",
    position: "relative",
    top: "15vh",
    // right:'5vw'
  },
  ".chatbox": {
    backgroundColor: "#fff",
    padding: "3vh 2vw",
    width: "60%",
    height: "16vh",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  ".chat-typo": {
    textAlign: "center",
    color: "#5C8D89",
    fontSize: "1rem",
  },
  ".chatinput": {
    backgroundColor: "#F0F0F0",
    borderColor: "#F0F0F0",
  },
  ".chatbtn": {
    textTransform: "none",
    backgroundColor: "#74B49B",
    borderRadius: 0,
    padding: "5px 4vw",
    fontWeight: "bold",
  },
  ".ctxtbox": {
    padding: "4vh 3vw",
    width: "50vw",
    position: "absolute",
    right: "5vw",
  },
  ".chattxt": {
    color: "#74B49B",
    textAlign: "center",
    lineHeight: "1.5",
    letterSpacing: 1,
  },
  ".categorybox": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "2vh 0",
    padding: "0 2vw 6vh 2vw",
  },
  ".btnimg": {
    height: "29vh",
    width: "55vh",
    borderRadius:'4px'
  },
}));
