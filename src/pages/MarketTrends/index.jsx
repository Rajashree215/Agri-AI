import React, { useEffect, useState } from "react";
import Appheader from "../../components/common/Appheader";
import CategoryHeader from "../../components/CategoryHeader";
import InfoCard from "../../components/common/InfoCard";
import Footer from "../../components/common/Footer";
import markettrendsbg from "../../assets/bgimgs/markettrendsbg.png";
import { PageStyles } from "../../pages/CropInsights/style";
import { Typography } from "@mui/material";
import { MarketData } from "./data";

export default function MarketTrends() {
  const [titlescroll, setTitlescroll] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 64) {
        setTimeout(() => {
          setTitlescroll("Market Trends");
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
        title="Market Trends"
        image={markettrendsbg}
        quote='"In the world of agriculture, market trends are the compass guiding farmers through the ever-changing landscape of supply and demand."'
      />
      <Typography variant="body2" className="introtxt">
        Market trends serve as the heartbeat of the business world, reflecting
        the dynamic interplay of forces that industries, consumer behavior, and
        economic landscapes. These trends are the rhythmic pulses that guide
        decision-makers, entrepreneurs, and investors through the ever-shifting
        currents of opportunity and risk. In the fast-paced realm of markets,
        understanding and interpreting trends is not merely a skill but a
        strategic imperative. Rise of Plant-Based Proteins: Growing awareness of
        the environmental and health implications of meat consumption is driving
        demand for plant-based protein alternatives
      </Typography>

      {MarketData.map((data, index) => (
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
