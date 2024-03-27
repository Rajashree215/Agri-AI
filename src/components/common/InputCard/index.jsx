import React from "react";
import TextInput from "../TextInput";
import { Box, Button, Card, Typography } from "@mui/material";

export default function InputCard({
  boxclass,
  cardclass,
  title,
  data,
  value,
  placeholder,
  btnclass,
  typomsg,
  typoclass,
  btnname,
  handleChange,
  handleClick,
  maxLength
}) {
  return (
    <>
      <Box className={boxclass}>
        <Card className={cardclass}>
          <Typography variant="h6" sx={{ color: "#3BB69A" }}>
            {title}
          </Typography>
          {typomsg && (
            <Typography variant="body1" className={typoclass}>
              {typomsg}
            </Typography>
          )}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            {data.map((input) => (
              <TextInput
                type={input.type}
                label={input.label}
                name={input.name}
                // value={signupdata[input.name]}
                value={input.value}
                size="small"
                className="textinput"
                labelvariant="caption"
                onChange={handleChange}
                placeholder={placeholder}
                maxLength={maxLength}
              />
            ))}
          </Box>

          <Button
            variant="contained"
            className={btnclass}
            onClick={handleClick}
          >
            {btnname}
          </Button>
        </Card>
      </Box>
    </>
  );
}
