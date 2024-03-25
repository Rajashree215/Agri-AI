import { Box, Typography } from "@mui/material";
import React from "react";
import { CHeaderStyles } from "./style";

export default function CategoryHeader({ title, subtitle, quote, image }) {
  return (
    <CHeaderStyles>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexGrow: 1,
          alignItems: "stretch",
          justifyContent: "flex-start",
          paddingTop: "10vh",
        }}
      >
        <Box className="titlebox">
          <Typography className="title" variant="h3">
            {" "}
            {title}{" "}
          </Typography>
          <Typography variant="body2" className="subtitle">
            {" "}
            {subtitle}{" "}
          </Typography>
        </Box>
      </Box>
      <Box className="quotebox">
        <Typography className="quote" variant="body2">
          {quote}
        </Typography>
      </Box>
    </CHeaderStyles>
  );
}
