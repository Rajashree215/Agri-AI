import React, { useEffect, useState } from "react";
import Appheader from "../../components/common/Appheader";
import CategoryHeader from "../../components/CategoryHeader";
import fieldbg from "../../assets/bgimgs/fieldbg.png";
import Footer from "../../components/common/Footer";
import { Typography } from "@mui/material";
import { PageStyles } from "../CropInsights/style";
import { FieldData } from "./data";
import InfoCard from "../../components/common/InfoCard";

export default function FieldMonitoring() {
  const [titlescroll, setTitlescroll] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 64) {
        setTimeout(() => {
          setTitlescroll("Field Monitoring");
        }, 75);
      } else {
        setTimeout(() => {
          setTitlescroll("");
        }, 75);
      }
    };
  }, []);

  return (
    <PageStyles>
      <Appheader titlescroll={titlescroll} />
      <CategoryHeader
        title="Field Monitoring"
        image={fieldbg}
        quote='"In the fields of tomorrow precision meets prediction. Crop prediction is the compass guiding farmers through the uncertainties of nature, turning the unknown into the expected."'
      />

      <Typography variant="body2" className="introtxt">
        Welcome to the forefront of agricultural innovation, where the ancient
        art of farming converges with cutting-edge and the communication
        technology to shape the future of our fields. Crop prediction, a pivotal
        component of modern agriculture, represents the field and the bridge
        between traditional wisdom and data-driven insights, transforming the
        age-old practice of sowing seeds of the farming into a precision-guided
        science. strategies, precision agriculture puts the power of
        optimization directly into the hands of farmers. This proactive approach
        not only protects yield potential but also reduces the need for costly
        inputs and mitigates environmental impact.
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
