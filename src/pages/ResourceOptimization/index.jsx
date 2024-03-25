import React from "react";
import Appheader from "../../components/common/Appheader";
import CategoryHeader from "../../components/CategoryHeader";
import resourcebg from "../../assets/bgimgs/resourcebg.png";
import InfoCard from "../../components/common/InfoCard";
import Footer from "../../components/common/Footer";
import { ResourceData } from "./data";
import { Typography } from "@mui/material";
import { PageStyles } from "../CropInsights/style";

export default function ResourceOptimization() {
  return (
    <PageStyles>
      <Appheader />
      <CategoryHeader
        title="Resource Optimization"
        image={resourcebg}
        quote='"In agriculture, the true art lies in optimizing resources—nurturing the soil, conserving water, and cultivating efficiency to harvest a bountythat sustains both the land and its stewards."'
      />

      <Typography variant="body2" className="introtxt">
        Welcome to the realm where agriculture meets efficiency, where the art
        of cultivation converges with the science of resource optimization. In
        the intricate dance between the soil and the hands that tend to it,
        resource optimization emerges as the guiding principle—a beacon
        illuminating the path to sustainable and resilient agriculture.
      </Typography>

      {ResourceData.map((data, index) => (
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
