import Box from "@mui/material/Box";
import Image from "next/image";
import { Metadata } from "next/types";
import React from "react";
import BGTexture from "@public/images/isolation.svg";
import HeroSection from "./components/HeroSection";
import VideoSlider from "./components/Slider";
export const metadata: Metadata = {
  title: "iDeep_Our services",
  description: "The services that iDeep company provides",
};

const OurServices = () => {
  return (
    <>
      <Box
        position={"relative"}
        display={"flex"}
        flexDirection={"column"}
        gap={10}
        width={"100vw"}
        alignItems={"center"}
        overflow={"hidden"}
        maxWidth={1536}
        py={"2rem"}
        px={"4rem"}
        mx={"auto"}
      >
        <Image
          src={BGTexture}
          alt="background texture"
          style={{
            width: "100vw",
            height: "auto",
            maxWidth: "1000px",
            position: "absolute",
            transform: "rotate(54deg)",
            right: "-20%",
            zIndex: "-1",
          }}
        />
        <HeroSection/>
        <VideoSlider/>
       
      </Box>
    </>
  );
};

export default OurServices;
