"use client"
//react
import React from "react";
//next
import Image, { StaticImageData } from "next/image";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled"
//icon
import SearchIcon from "@public/images/vuesax-linear-vuesax-linear-search-normal.svg";
import BrushIcon from "@public/images/vuesax-linear-vuesax-linear-brush.svg";
import LinkArrowIcon from "@public/images/vuesax-linear-vuesax-linear-programming-arrow.svg";
import PaypalIcon from "@public/images/vuesax-linear-vuesax-linear-paypal.svg";

const titleItems = [
  "RESEARCH & DEFINE",
  "DESIGN & INNOVATION",
  "DEVELOPMENT & REFINEMENT",
  "APPROVAL & DELIVERY",
];
const descriptionItems = [
  "We initiate your project with in-depth research, laying a strong foundation to grasp your needs.",
  "Our creative team devises tailored, innovative solutions, backed by a solid plan.",
  "Our experts elevate your project, constantly improving it to ensure top quality.",
  "After presenting a demo, we proceed with delivery and payment once you're satisfied.",
];
const iconImageItems = [SearchIcon, BrushIcon, LinkArrowIcon, PaypalIcon];
const OurProjectJourney = () => {
  return (
    <>
      <ComponentWrapper
      >
        <Typography
          display={"inline-block"}
          variant="h2"
          fontSize={{ xs: "24px",md:"64px" }}
        >
          Our Project Journey
        </Typography>
        <Typography
          display={"inline-block"}
          variant="body2"
          maxWidth={{ xs: 250 ,sm:400,md:"unset"}}
          fontWeight={{lg:500}}
          fontSize={{lg:22}}
          textAlign={{ xs: "center" }}
        >
          At iDeep, we follow a simple and effective roadmap to bring your
          vision to life
        </Typography>
        <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={{xs:10,md:0}}>
          {titleItems.map((item: string, index: number) =>
            iconItems(
              index,
              item,
              descriptionItems[index],
              iconImageItems[index]
            )
          )}
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default OurProjectJourney;

const iconItems = (
  key: number,
  title: string,
  description: string,
  iconImage: StaticImageData
) => (
  <Box key={key} display={"flex"} flexDirection={"column"} alignItems={"center"} px={4} gap={2}>
    <Box>
      <Image
        src={iconImage}
        alt="icon"
        sizes="(min-width: 808px) 80vw, 80vw"
        quality={2}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
    </Box>
    <Typography display={"inline-block"} variant="h5" width={"max-content"}>{title}</Typography>
    <Typography display={"inline-block"} variant="subtitle1" textAlign={"center"} maxWidth={350}>{description}</Typography>
  </Box>
);

const ComponentWrapper = styled(Box)((props)=>({
display:"flex",
flexDirection:"column",
alignItems:"center",
margin:"0px auto",
maxWidth:"auto",
[props.theme.breakpoints.up("xs")]:{
  gap:10,
  margin:"10px auto",
},
[props.theme.breakpoints.up("md")]:{
  gap:50,
  margin:"50px auto",
}
}))

