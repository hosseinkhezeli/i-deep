'use client'
//react
import React from "react";
//next
import Image from "next/image";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled"
//icons
import GuardIcon from "@public/images/gurd.svg";
import FlashIcon from "@public/images/flash2.svg";

const Content = () => {
  return (
    <>
      <ComponentWrapper>
        <Typography variant="h2" fontSize={{ xs: "35px", lg: "50px" }}>
          WE'RE HERE TO HELP
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ xs: 16, lg: 20 }}
          lineHeight={"200%"}
        >
          We're here to assist you in any way we can. Whether you have
          questions, need support, or simply want to get in touch, there are two
          convenient ways to reach out to us:
        </Typography>
        <Box display={"flex"} gap={4}>
          <Box display={"flex"} order={2} flexDirection={"column"} gap={2}>
            <Typography variant="h5" fontSize={{ xs: "inherit", lg: "24px" }}>
              Contact form
            </Typography>
            <Typography fontSize={{ xs: "inherit", lg: "18px" }}>
              Fill out the form, and we'll promptly respond to your inquiry
            </Typography>
          </Box>
          <Box order={1}>
            <Image src={GuardIcon} alt="Guard Icon" />
          </Box>
        </Box>
        <Box display={"flex"} gap={4}>
          <Box display={"flex"} order={2} flexDirection={"column"} gap={2}>
            <Typography variant="h5" fontSize={{ xs: "inherit", lg: "24px" }}>
              Direct contact
            </Typography>
            <Typography fontSize={{ xs: "inherit", lg: "18px" }}>
              For a more personal touch, you can also reach us via the details
              in below section
            </Typography>
          </Box>
          <Box order={1}>
            <Image src={FlashIcon} alt="Guard Icon" />
          </Box>
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default Content;

const ComponentWrapper = styled(Box)((props)=>({
  display:"flex",
  flexDirection:"column",
  flexBasis:"50%",
  gap:30,
  [props.theme.breakpoints.up("lg")]:{
    gap:50
  }
}))