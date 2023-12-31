"use client";
//react
import React from "react";
//next
import Image from "next/image";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
//images
import ContactUsImage from "@public/images/ideepContactus.svg";
import useTheme from "@mui/material/styles/useTheme"

const HeroBanner = () => {
  //hooks
  const theme = useTheme();

  //components

  const ComponentWrapper = styled(Box)((props) => ({
    width: "90%",
    maxWidth: 1480,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    padding: "4px 8px",
    margin: "3rem auto",
    flexDirection: "column",
    height: "auto",
    [props.theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      padding: "32px 64px",
    },
    [props.theme.breakpoints.up("lg")]: {
      height: "360px",
    },
  }));

  return (
    <>
      <ComponentWrapper>
        <Typography
          variant="h2"
          color={theme.palette.secondary.contrastText}
          lineHeight={"150%"}
          fontSize={{ xs: 35, sm: 38, md: 42, lg: 50 }}
          maxWidth={415}
          flexBasis={"60%"}
        >
          Get In Touch For Expert Guidance
        </Typography>
        <Box
          position={"relative"}
          display={"flex"}
          justifyContent={{ xs: "center", md: "flex-end" }}
          flexBasis={"40%"}
        >
          <Image
            style={{
              width: "90%",
              height: "90%",
              maxWidth: "442px",
              maxHeight: "343px",
            }}
            src={ContactUsImage}
            alt="Website illustration"
          />
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default HeroBanner;
