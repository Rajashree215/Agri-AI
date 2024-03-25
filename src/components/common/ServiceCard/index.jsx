import React from "react";
import { ScardStyles } from "./style";
import { Card, Typography } from "@mui/material";

export default function ServiceCard({ title, icon, description }) {
  return (
    <ScardStyles>
      <Card className="card">
        <Typography className="title">{title}</Typography>
        <img src={icon} alt="" className="icon" />
        <Typography variant="caption" className="desc"> {description} </Typography>
      </Card>
    </ScardStyles>
  );
}
