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
          style={{ width: "100%", height: "100%",borderRadius:"12px" }}
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
  boxShadow:`${theme.palette.mode==="dark"?`0px 5px 10px 0px ${theme.palette.primary.main.padEnd(9,"15")}`:`0px 20px 35px 0px ${theme.palette.secondary.main.padEnd(9,"20")}`}` ,
  width:"100%",
  maxWidth:"unset",
  padding:20,
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  borderRadius:10,
  gap:2,
  border:`${theme.palette.mode==="dark"?`1px solid ${theme.palette.primary.main.padEnd(9,"30")}`:"none"}`,
  transition: "0.3s",
  ":hover":{
    transform: "scale(1.005)",
    boxShadow:`${theme.palette.mode==="dark"?`0px 5px 10px 0px ${theme.palette.primary.main.padEnd(9,"30")}`:`0px 20px 35px 0px ${theme.palette.secondary.main.padEnd(9,"30")}`}` ,
  },
  [props.theme.breakpoints.up("sm")]:{
    maxWidth:400,
  }
}))
