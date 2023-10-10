"use client";
//react
import React from "react";
//next
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RibbonIcon from "@public/images/soon_bg.svg";
import theme from "@/theme/theme";
import styled from "@mui/material/styles/styled"
//types
type Props = {
  link: string;
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  isActive: boolean;
};

const ServicesCard = ({
  link,
  image,
  title,
  subtitle,
  description,
  isActive,
}: Props) => {
  return (
    <Link
      href={link}
      style={{
        pointerEvents: `${isActive ? "auto" : "none"}`,
        display: "content",
        position: "relative",
      }}
    >
      {!isActive && (
        <>
          <Image
            src={RibbonIcon}
            alt="Ribbon"
            style={{
              position: "absolute",
              left: 0,
              top: "27.5%",
              zIndex: 1,
              width: "100px",
            }}
          />
          <Typography
            position={"absolute"}
            left={"2rem"}
            top={"29%"}
            color={theme.palette.secondary.contrastText}
            fontSize={16}
            zIndex={1}
          >
            Soon
          </Typography>
        </>
      )}
      <ComponentWrapper
        sx={{ opacity: `${isActive ? "1" : "0.5"}` }}
      >
        <Image
          src={image}
          alt="Face recognition"
          style={{ width: "100%", height: "100%" }}
        />
        <Typography variant="h5" fontSize={"20px"}>
          {title}
        </Typography>
        <Typography variant="h5" fontSize={"16px"}>
          {subtitle}
        </Typography>
        <Typography
          variant="body1"
          maxWidth={"95%"}
          textAlign={"justify"}
          mx={"auto"}
        >
          {description}
        </Typography>
      </ComponentWrapper>
    </Link>
  );
};

export default ServicesCard;

const ComponentWrapper = styled(Box)((props)=>({
  position:"relative",
  boxShadow:"0px 16px 48px 0px rgba(0,0,0,0.1)",
  width:"100%",
  maxWidth:"unset",
  padding:20,
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  borderRadius:10,
  gap:2,
  [props.theme.breakpoints.up("sm")]:{
    maxWidth:400,
  }
}))
