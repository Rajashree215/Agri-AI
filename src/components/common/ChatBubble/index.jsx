import React from "react";
import { ChatStyles } from "./style";
import { Box, Typography } from "@mui/material";

export default function ChatBubble({ uname, profileimg, index, msg }) {
  return (
    <ChatStyles>
      {index % 2 === 0 ? (
        <Box className="chatbubble-user">
          <Box className="msgbox-user" sx={{ maxWidth: "60%" }}>
            <Typography variant="caption" className="uname-typo">
              {uname}
            </Typography>
            <Box className="msg-user">
              <Typography variant="caption" className="msg-typo-user">
                {msg}
              </Typography>
            </Box>
          </Box>
          <img src={profileimg} alt="" className="profileimg" />
        </Box>
      ) : (
        <Box className="chatbubble-bot">
          <img src={profileimg} alt="" className="profileimg" />
          <Box className="msgbox-bot" sx={{ maxWidth: "60%" }}>
            <Typography variant="caption" className="uname-typo">
              {uname}
            </Typography>
            <Box className="msg-bot">
              <Typography variant="caption" className="msg-typo-bot">
                {msg}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </ChatStyles>
  );
}
