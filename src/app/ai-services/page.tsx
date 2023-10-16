//react
import React from "react";
//next
import { StaticImageData } from "next/image";
import { Metadata } from "next/types";
//components
import ServicesCard from "./components/ServicesCard";
//images
import TextToVideoImage from "@public/images/page1.jpg";
import OCRImage from "@public/images/page4.jpg";
import SpeechRecognitionImage from "@public/images/page3.jpg";
import ObjectDetectionImage from "@public/images/page5.jpg";
import ImageLabeling from "@public/images/page6.jpg";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled"
//types
type servicesCardDataType = {
  link: string;
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  isActive: boolean;
};

export const metadata: Metadata = {
  title: "iDeep_Our services",
  description: "The services that iDeep company provides",
};

const OurServices = () => {
  //components
  const ServiceCardWrapper = styled(Box)((props)=>({
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 1536,
    paddingTop: "2rem",
    margin: "0px auto",
    gap: 5,
    justifyContent: "center",
  }))
  
  return (
    <>
      <Typography variant="h2" textAlign={"center"} my={4}>
        AI Services
      </Typography>
      <Typography textAlign={"center"}>Intelligence Solutions</Typography>
      <ServiceCardWrapper
      >
        {servicesCardData.map((item: servicesCardDataType) => (
          <ServicesCard
            link={item.link}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            isActive={item.isActive}
          />
        ))}
      </ServiceCardWrapper>
    </>
  );
};

export default OurServices;
//data & initial values
const servicesCardData: servicesCardDataType[] = [
  {
    link: "ai-services/ai-video-generation",
    image: TextToVideoImage,
    title: "Text to video",
    subtitle: "Generate Of Talking With Ai",
    description:
      "Transform your written content into high-quality videos with our text-to-video AI service. Fast, efficient, and engaging. Try it today!",
    isActive: true,
  },
  {
    link: "ai-services/ai-video-generation",
    image: OCRImage,
    title: "OCR",
    subtitle: "Speech Recognition",
    description:
      "Transform your written content into high-quality videos with our text-to-video AI service. Fast, efficient, and engaging. Try it today!",
    isActive: false,
  },
  {
    link: "ai-services/ai-video-generation",
    image: SpeechRecognitionImage,
    title: "Text to video",
    subtitle: "Generate Of Talking With Ai",
    description:
      "Transform your written content into high-quality videos with our text-to-video AI service. Fast, efficient, and engaging. Try it today!",
    isActive: false,
  },
  {
    link: "ai-services/ai-video-generation",
    image: OCRImage,
    title: "Audio Event Detection",
    subtitle: "Generate Of Talking With Ai",
    description:
      "Transform your written content into high-quality videos with our text-to-video AI service. Fast, efficient, and engaging. Try it today!",
    isActive: false,
  },
  {
    link: "ai-services/ai-video-generation",
    image: ObjectDetectionImage,
    title: "Object Detection",
    subtitle: "Generate Of Talking With Ai",
    description:
      "Transform your written content into high-quality videos with our text-to-video AI service. Fast, efficient, and engaging. Try it today!",
    isActive: false,
  },
  {
    link: "ai-services/ai-video-generation",
    image: ImageLabeling,
    title: "Image Labeling",
    subtitle: "Generate Of Talking With Ai",
    description:
      "Transform your written content into high-quality videos with our text-to-video AI service. Fast, efficient, and engaging. Try it today!",
    isActive: false,
  },
];
