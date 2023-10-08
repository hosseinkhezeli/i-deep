import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import ContactUsImage from "@public/images/ideepContactus.svg";
import { lightPalette } from "@/theme/components/palette/light/lightPalette";

const HeroBanner = () => {
  return (
    <>
      <Box
        width={"90%"}
        height={{ xs: "auto", lg: "360px" }}
        maxWidth={1480}
        mx={"auto"}
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={lightPalette.secondary.main}
        borderRadius={3}
        px={{ xs: 4, sm: 16 }}
        py={2}
        my={"3rem"}
      >
        <Typography
          variant="h2"
          color={lightPalette.secondary.back}
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
          justifyContent={{xs:"center",md:"flex-end"}}
          flexBasis={"40%"}
        >
          <Image
            style={{ width: "90%", height: "90%",maxWidth:"442px",maxHeight:"343px" }}
            src={ContactUsImage}
            alt="Website illustration"
          />
        </Box>
      </Box>
    </>
  );
};

export default HeroBanner;
