import styled from "@emotion/styled";

export const ChatStyles = styled("div")(({ theme }) => ({
  ".profileimg": {
    height: 25,
    width: 25,
    borderRadius: "50%",
    display: "inline",
  },
  ".uname-typo": {
    color: "#aaa",
    fontWeight: "bold",
  },
  ".chatbubble-bot": {
    display: "flex",
    gap: "1vw",
    padding: "1.5vh 0",
  },
  ".chatbubble-user": {
    display: "flex",
    justifyContent: "flex-end",
    gap: "1vw",
    padding: "1.5vh 0",
  },
  ".msgbox-user": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  ".msg-typo-user": {
    textAlign: "right",
  },
  ".msgbox-bot": {
    display: "flex",
    flexDirection: "column",
  },
  ".msg-user": {
    backgroundColor: "#5C8D89",
    padding: "1vh 1vw",
    borderRadius: ".8rem",
  },
  ".msg-bot": {
    backgroundColor: "#90CDB5",
    padding: "1vh 1vw",
    borderRadius: ".8rem",
  },
  ".msg-typo-user": {
    color: "#fff",
  },
  ".msg-typo-bot": {
    color: "#003d38",
  },
}));
