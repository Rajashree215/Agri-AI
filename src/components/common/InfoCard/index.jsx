import React from "react";
import { InfoStyles } from "./style";
import { Box, Typography } from "@mui/material";

export default function InfoCard({ title, info, image, index }) {
  return (
    <InfoStyles>
      <Box className={index%2===0?"wrapperbox":"wrapreversebox"}>
        {index % 2 === 0 ? (
          <>
            <Box className="infobox">
              <Typography className="title" variant="h6">
                {title}
              </Typography>
              <Typography className="infotxt" variant="body2">
                {" "}
                {info}{" "}
              </Typography>
            </Box>
            <img src={image} alt="" className="image" />
          </>
        ) : (
          <>
            <img src={image} alt="" className="image" />
            <Box className="infobox">
              <Typography className="title" variant="h6">
                {title}
              </Typography>
              <Typography className="infotxt" variant="body2">
                {" "}
                {info}{" "}
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </InfoStyles>
  );
}
