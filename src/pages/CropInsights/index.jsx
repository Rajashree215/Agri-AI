import React from "react";
import { Typography } from "@mui/material";
import Appheader from "../../components/common/Appheader";
import cropinsightbg from "../../assets/bgimgs/cropinsightbg.png";
import CategoryHeader from "../../components/CategoryHeader";
import InfoCard from "../../components/common/InfoCard";
import Footer from "../../components/common/Footer";
import { PageStyles } from "./style";
import { cropData } from "./data";

export default function CropInsights() {
  return (
    <PageStyles>
      <Appheader />
      <CategoryHeader
        title="Crop Insights"
        subtitle="In the world of farming, knowledge is the key to abundant harvests. Crop Insight unlocks the door to a bountiful future"
        quote='"In the world of farming, knowledge is the key to abundant harvests. Crop Insight unlocks the door to a bountiful future."'
        image={cropinsightbg}
      />

      <Typography variant="body2" className="introtxt">
        Explore a wealth of valuable and in-depth information, analysis, and
        knowledge dedicated to crops and agriculture. Our platform offers a
        comprehensive range of details and observations designed to benefit
        farmers, agronomists, researchers, and stakeholders in the agricultural
        sector. Delve into the world of crop insights to gain a deeper
        understanding of crucial aspects of crop production, management, and
        related actors. Empowering you with the knowledge you need for informed
        decision-making and improved farming practices.
      </Typography>

      {cropData.map((data, index) => (
        <InfoCard
          title={data.title}
          info={data.info}
          image={data.image}
          index={index}
        />
      ))}

      <Footer/>
    </PageStyles>
  );
}
