"use client";
import { lightPalette } from "@/theme/components/palette/light/lightPalette";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import InfiniteIcon from "@public/images/infinite.svg";

const StayInTheKnow = () => {
  return (
    <>
      <Box width={"100vw"} bgcolor={lightPalette.secondary.main}>
        <Box
          maxWidth={1536}
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          width={"100%"}
          mx={"auto"}
          justifyContent={"space-between"}
          py={"4rem"}
          px={{ xs: "1rem", md: "6rem" }}
        >
          <Box maxWidth={500}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
            >
              <Typography
                color={lightPalette.secondary.back}
                fontSize={32}
                fontWeight={600}
                height={"100%"}
                lineHeight={"120%"}
              >
                Stay in the Know
              </Typography>
              <Box height={"100%"} display={"flex"}>
                <Image
                  src={InfiniteIcon}
                  alt="Infinite icon"
                  style={{ width: 45, height: 34 }}
                />
              </Box>
            </Box>
            <Typography
              color={lightPalette.secondary[20]}
              fontSize={22}
              fontWeight={500}
              lineHeight={"150%"}
              my={4}
            >
              Subscribe to Our Updates for Exclusive Insights and More!
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            maxWidth={380}
            justifyContent={"center"}
          >
            <Typography color={lightPalette.secondary.back} fontSize={12}>
              Your e-mail :
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              gap={4}
              width={{ xs: "90vw", sm: "40vw", md: "380px" }}
            >
              <TextField variant="filled" sx={{ flexGrow: 1 }} />
              <Button sx={{ bgcolor: lightPalette.primary.main, p: 3, px: 5 }}>
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StayInTheKnow;
