//react
import React from "react";
//next
import { StaticImageData } from "next/image";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//images
import PlatformCard from "./Components/PlatformCard";
import MAMImage from "@public/images/plat-mediaManagment.png";
import CarBazaarImage from "@public/images/palt-roadMaster.png";
//types
type Props = {
  title: string;
  description: string;
  optionList: string[];
  link: string;
  image: StaticImageData;
  layout: string;
};

const Platforms = () => {
  return (
    <>
      <Box>
        <Typography variant="h2" fontSize={{xs:40,md:50}} textAlign={"center"} my={10}>Platforms Overview</Typography>
        {platformCardData.map((item: Props, index: number) => (
          <PlatformCard
            key={index}
            title={item.title}
            description={item.description}
            optionList={item.optionList}
            image={item.image}
            link={item.link}
            layout={item.layout}
          />
        ))}
      </Box>
    </>
  );
};

export default Platforms;

const platformCardData: Props[] = [
  {
    title: "Experience the Future of Media Management with AI",
    description:
      "Our AI-powered platform is your gateway to a streamlined media operation. Revolutionize your processes, cut operational costs, and elevate content quality with ease.",
    optionList: [
      "AI-Powered insight",
      "Quality assurance",
      "Smart content delivery",
      "Instant engagement",
    ],
    link: "#",
    image: MAMImage,
    layout: "dark",
  },
  {
    title: "AI-powered car dealership Hub",
    description:
      "Discover a new era in the automotive industry with our cutting-edge AI-driven dealership platform. Dive into the world of intelligent inventory management, real-time auction insights, and lead generation revolutionized by AI.",
    optionList: [
      "Effortless Inventory Management",
      "Instant Auction Insight",
      "Lead Generation Redefined",
      "Predictive Analytics",
    ],
    link: "#",
    image: CarBazaarImage,
    layout: "light",
  },
  {
    title: "Streamlining Insurance Services using AI",
    description:
      "In a rapidly evolving insurance landscape, innovation is the key to success. We're on a mission to transform the industry with our cutting-edge B2B2C insurance platform, powered by artificial intelligence.",
    optionList: [
      "AI-powered sales assistance ",
      "Enhanced sales conversion",
      "Scalable user onboarding",
      "Streamlined sales cycle",
    ],
    link: "#",
    image: MAMImage,
    layout: "dark",
  },
];
