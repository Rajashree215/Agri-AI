import React from "react";
import Appheader from "../../components/common/Appheader";
import CategoryHeader from "../../components/CategoryHeader";
import fieldbg from "../../assets/bgimgs/fieldbg.png";
import Footer from "../../components/common/Footer";
import { Typography } from "@mui/material";
import { PageStyles } from "../CropInsights/style";
import { FieldData } from "./data";
import InfoCard from "../../components/common/InfoCard";

export default function FieldMonitoring() {
  return (
    <PageStyles>
      <Appheader />
      <CategoryHeader
        title="Field Monitoring"
        image={fieldbg}
        quote='"In the fields of tomorrow precision meets prediction. Crop prediction is the compass guiding farmers through the uncertainties of nature, turning the unknown into the expected."'
      />

      <Typography variant="body2" className="introtxt">
        Welcome to the forefront of agricultural innovation, where the ancient
        art of farming converges with cutting-edge technology to shape the
        future of our fields. Crop prediction, a pivotal component of modern
        agriculture, represents the bridge between traditional wisdom and
        data-driven insights, transforming the age-old practice of sowing seeds
        into a precision-guided science
      </Typography>

      {FieldData.map((data, index) => (
        <InfoCard
          title={data.title}
          info={data.info}
          image={data.image}
          index={index}
        />
      ))}

      <Footer />
    </PageStyles>
  );
}
