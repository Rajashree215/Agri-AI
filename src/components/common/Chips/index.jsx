import { Chip } from "@mui/material";
import React from "react";

export default function Chips({ question, handleClick, className }) {
  return (
    <Chip
      label={question}
      variant="outlined"
      onClick={handleClick}
      className={className}
      sx={{
        backgroundColor: "#90cdb5d6",
        borderColor: "#5c8d89c2",
        "&:hover": {
          backgroundColor: "#90cdb5d6",
        },
      }}
    />
  );
}
