import styled from "@emotion/styled";

export const CHeaderStyles = styled("div")(({ theme }) => ({
  ".title": {
    color: "#fff",
    fontFamily: "Baskerville Old Face",
  },
  ".subtitle": {
    fontStyle: "italic",
    color: "#fff",
    fontSize: "1rem",
    letterSpacing: 1,
    lineHeight: 1.4,
  },
  ".titlebox": {
    display: "flex",
    flexDirection: "column",
    justifyContent:'space-evenly',
    gap: "3vh",
    minHeight: "14vw",
    width: "40vw",
    padding: "4vh 3vw",
  },
  ".quotebox": {
    // height: "5vw",
    padding:'5vh 5vw',
    backgroundColor: "#5C8D89",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".quote": {
    color: "#fff",
    fontStyle: "italic",
    textAlign:'center'
  },
}));
