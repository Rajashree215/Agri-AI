import styled from "@emotion/styled";

export const WeatherStyles = styled("div")(({ theme }) => ({
  ".card": {
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexWrap:'wrap',
    justifyContent: "space-around",
    width: "55vw",
    margin: "25vh auto 15vh auto",
    padding: "3vw",
    borderRadius:'10px',
    boxShadow:'0px 0px 5px #cecece'
  },
  ".weathericon": {
    height: "73%",
    width: "55%",
    padding: "1.5vw 0",
    position:'relative',
    left:'25%'
  },
  ".datetypo": {
    color: "#5C8D89",
    fontWeight:550,
    fontStyle:'italic',
    textAlign:'center',
    letterSpacing:1
  },
}));
