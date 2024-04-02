import React, { useContext, useEffect, useState } from "react";
import { ChatBotStyles } from "./style";
import { Box, Button, Modal, Typography } from "@mui/material";
import { AuthContext } from "../../context/AuthContextProvider";
import avatar from "../../assets/avatar.png";
import bot from "../../assets/chatbot.png";
import ChatBubble from "../common/ChatBubble";
import TextInput from "../common/TextInput";
import { Send } from "@mui/icons-material";
import Chips from "../common/Chips";
import { QuestionData } from "./data";

export default function ChatBot({ open, handleCloseModal }) {
  const { uname } = useContext(AuthContext);
  const [inputmsg, setInputmsg] = useState("");
  const [questions, setQuestions] = useState(QuestionData);
  const [qid, setQid] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [msgs, setMsgs] = useState([
    "Hello!",
    `Welcome ${localStorage.getItem("uname")}! How can I help you?`,
  ]);

  const people = {
    user: {
      profileimg: avatar,
      uname: localStorage.getItem("uname"),
    },
    bot: {
      profileimg: bot,
      uname: "Agri Bot",
    },
  };

  const handleChange = (e) => {
    const value = e.target.value;
    let lvalue = value.toLowerCase();
    const quesarr = questions.filter((data) =>
      data.question.toLowerCase().includes(lvalue)
    );
    setSuggestions(quesarr);
    setInputmsg(e.target.value);
  };

  const handleChat = () => {
    if (qid === null) {
      let m = [...msgs];
      m.push(inputmsg);
      m.push(
        "I'm sorry, I couldn't find a match for your question at the moment. If you have any specific inquiries or need assistance with agricultural-related topics, contact agriwithai@gmail.com"
      );
      setMsgs(m);
      setInputmsg("");
    } else {
      let copy = [...msgs];
      let sug = [...suggestions];
      let ques = [...questions];
      // inserting questions and answers
      const Qobj = questions.find((data) => data.id === qid);
      copy.push(inputmsg);
      copy.push(Qobj.answer);

      // removing answered question from questions and suggestions
      const si = suggestions.findIndex((data) => data.id === qid);
      sug.splice(si, 1);
      const qi = questions.findIndex((data) => data.id === qid);
      ques.splice(qi, 1);

      setMsgs(copy);
      setInputmsg("");
      setQid(null);
      setSuggestions(sug);
      setQuestions(ques);
    }
  };

  const ScrollToBottom = () => {
    const scrollbox = document.getElementById("scroll-box");
    if (scrollbox) {
      scrollbox.scrollTop = scrollbox.scrollHeight;
    }
  };

  const clickSuggesstion = (suggestion, index) => {
    setInputmsg(suggestion.question);
    setQid(suggestion.id);
    // let sarray = [...suggestions];
    // sarray.splice(index, 1);
    // setSuggestions(sarray);
  };

  useEffect(() => {
    ScrollToBottom();
  }, [msgs]);

  return (
    <ChatBotStyles>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "2.8vh",
            bottom: "2.8vh",
            right: "7vw",
            width: 325,
            bgcolor: "#dedede",
            boxShadow: 10,
            p: 3,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}
          >
            Agri Bot
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "70vh",
              overflowY: "auto",
            }}
            id="scroll-box"
          >
            {msgs.map((msg, index) => (
              <ChatBubble
                uname={index % 2 === 0 ? people.user.uname : people.bot.uname}
                profileimg={
                  index % 2 === 0
                    ? people.user.profileimg
                    : people.bot.profileimg
                }
                msg={msg}
                index={index}
              />
            ))}
          </Box>

          <Box
            sx={{
              overflowX: "auto",
              minHeight: "7vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: ".6vw",
            }}
          >
            {suggestions.map((suggestion, index) => (
              <Chips
                question={suggestion.question}
                handleClick={() => {
                  clickSuggesstion(suggestion, index);
                }}
                className="suggestions"
              />
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // paddingTop: "2vh",
            }}
          >
            <TextInput
              variant="outlined"
              type="text"
              value={inputmsg}
              placeholder="Ask me..."
              className="inputbox"
              size="small"
              width="73%"
              autoComplete="off"
              onChange={handleChange}
            />
            <Button
              sx={{
                backgroundColor: "#74B49B",
                padding: "5px 1.8vw",
                "&:hover": {
                  backgroundColor: "#74B49B",
                },
              }}
              onClick={handleChat}
            >
              <Send sx={{ color: "#fff" }} />
            </Button>
          </Box>
        </Box>
      </Modal>
    </ChatBotStyles>
  );
}
