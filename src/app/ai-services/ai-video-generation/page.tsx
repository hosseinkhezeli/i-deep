"use client"
//react
import React from "react";
//next
import { Metadata } from "next/types";
import Image from "next/image";
//image
import BGTexture from "@public/images/isolation.svg";
//component
import HeroSection from "./components/HeroSection";
import VideoSlider from "./components/Slider";
//mui
import Box from "@mui/material/Box";
import styled from '@mui/material/styles/styled'


const AiVideoGeneration = () => {
  return (
    <>
      <ComponentWrapper
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
       
      </ComponentWrapper>
    </>
  );
};

export default AiVideoGeneration;

const ComponentWrapper = styled(Box)((props)=>({
position:"relative",
display:"flex",
flexDirection:"column",
gap:10,
width:"100vw",
alignItems:"center",
overflow:"hidden",
maxWidth:1536,
padding:"2rem 4rem",
margin:"0px auto"
}))
