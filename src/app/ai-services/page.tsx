import React from "react";
import ServicesCard from "./components/ServicesCard";
import TextToVideoImage from "@public/images/page1.jpg";
import OCRImage from "@public/images/page4.jpg";
import SpeechRecognitionImage from "@public/images/page3.jpg";
import ObjectDetectionImage from "@public/images/page5.jpg";
import ImageLabeling from "@public/images/page6.jpg";
import Box from "@mui/material/Box";
import { StaticImageData } from "next/image";
type servicesCardDataType = {
  link: string;
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  isActive: boolean;
};

const OurServices = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        maxWidth={1479}
        pt={"4rem"}
        justifyContent={{ xs: "center", xl: "space-between" }}
        mx={"auto"}
        gap={6}
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
      </Box>
    </>
  );
};

export default OurServices;

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