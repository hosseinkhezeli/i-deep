import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import ContactUsImage from "@public/images/ideepContactus.svg";
import { lightPalette } from "@/theme/components/palette/light/lightPalette";

const LocationBanner = () => {
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
       <Box>
        <Box>
            {/* <Image/> */}
            <Box></Box>
        </Box>
       </Box>
       <Box></Box>
      </Box>
    </>
  );
};

export default LocationBanner;
