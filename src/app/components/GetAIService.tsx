'use client'
//react
import React from "react";
//next
import Image from "next/image";
//mui
import { Box, Button, Typography, useTheme } from "@mui/material";
import styled from "@mui/material/styles/styled"
//image
import ThinkingRobot from "@public/images/thinkingAironman.webp";

const GetAiServices = () => {
  //hooks
  const theme = useTheme()

  //components
  const Background = styled(Box)(()=>({
    width:"100vw",
    backgroundColor:theme.palette.secondary.main
  }))
  const ComponentWrapper = styled(Box)((props)=>({
    display:"flex",
    maxWidth:1300,
    margin:"2rem auto",
    padding:"1rem auto",
    flexDirection:"column",
    [props.theme.breakpoints.up("md")]:{
      flexDirection:"row"
    }
  }))
  
  const ImageWrapper = styled(Box)((props)=>({
  width:"100%",
  display:"flex",
  order:2,
  alignItems:"flex-end",
  flexBasis:"50%",
  [props.theme.breakpoints.up("lg")]:{
    flexBasis:"40%",
  }
  }))
  
  
  const ContentWrapper = styled(Box)((props)=>({
  display:"flex",
  flexDirection:"column",
  padding:"2rem 4px",
  gap:8,
  flexBasis:"50%",
  order:1,
  [props.theme.breakpoints.up("lg")]:{
    flexBasis:"60%",
  }
  
  }))
  

  return (
    <>
      <Background>
        <ComponentWrapper>
          <ImageWrapper
          >
            <Image
              src={ThinkingRobot}
              alt="Thinking Robot"
              sizes="(min-width: 808px) 80vw, 80vw"
              quality={100}
              style={{
                width: "100%",
                height: "max-content",
                maxHeight: "500px",
                maxWidth: "430px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </ImageWrapper>
          <ContentWrapper
          >
            <Typography
              color={theme.palette.secondary.contrastText}
              variant="h2"
              fontSize={{ xs: 24, md: 48 }}
              textAlign={{ xs: "center" }}
            >
              Get AI Services
            </Typography>
            <Typography
              color={theme.palette.secondary.contrastText}
              variant="body1"
              padding={4}
              textAlign={"justify"}
              lineHeight={"200%"}
              fontSize={{xs:14,md:18}}
            >
              Imagine simplifying your tasks effortlessly with our AI services,
              from converting speech to text using ASR to creating engaging
              content through Text-to-Video. Our AI streamlines your operations,
              makes things more accessible, and opens up new possibilities. You
              can communicate seamlessly across languages, reaching a broader
              audience. Dive into the future of AI with us, where complexity
              transforms into simplicity and innovation knows no bounds. Explore
              our AI services and tap into the limitless potential they offer.
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <Button
              variant="contained"
              color='info'
                sx={{
                  width: "max-content",
                  px: 15,
                  py: 4,
                  fontWeight: 600,
                }}
              >
                Explore Now !
              </Button>
            </Box>
          </ContentWrapper>
        </ComponentWrapper>
      </Background>
    </>
  );
};

export default GetAiServices;



