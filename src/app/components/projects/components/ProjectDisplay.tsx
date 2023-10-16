"use client"
//react
import React from "react";
//next
import Image, { StaticImageData } from "next/image";
//mui
import { Box, Button, Typography } from "@mui/material";
import styled from "@mui/material/styles/styled"

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
};
const ProjectDisplay = ({ title, description, image }: Props) => {

  //components
  const ComponentWrapper = styled(Box)((props)=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    margin:"80px auto",
    padding:"0px 4px",
    width:"max-content",
    gap:15,
  }))
  
  return (
    <>
      <ComponentWrapper
      >
        <Typography
          display={"inline-block"}
          variant="h2"
          fontSize={{ xs: "24px", md: "48px" }}
          textAlign={"center"}
          maxWidth={{xs:"90vw"}}
          width={{ xs: "fit-content", xl: "max-content" }}
          my={"1rem"}
        >
          {title}
        </Typography>
        <Typography
          textAlign={"center"}
          variant="h5"
          fontWeight={500}
          maxWidth={{xs:"80vw",lg:"940px"}}
          width={{ xs: "fit-content", xl: "max-content" }}
          mt={"1rem"}
        >
          {description}
        </Typography>
        <Box width={"max-content"}>
          <Image
            src={image}
            alt="Project mockup"
            sizes="(min-width: 808px) 80vw, 80vw"
            quality={90}
            style={{
              width: "75vw",
              height: "max-content",
              maxWidth:1124
            }}
          />
        </Box>
        <Button
        variant="contained"
          sx={{
            px: { xs: 10, lg: 25 },
            py: "0.8rem",
            fontSize: { xs: 14, lg: 18 },
          }}
        >
          View Project !
        </Button>
      </ComponentWrapper>
    </>
  );
};

export default ProjectDisplay;


