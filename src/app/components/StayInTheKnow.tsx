"use client";
//react
import React from "react";
//next
import Image from "next/image";
//mui
import { Button, TextField, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
//image
import InfiniteIcon from "@public/images/infinite.svg";

const StayInTheKnow = () => {
  //hooks
  const theme = useTheme()

  //components
  const Background = styled(Box)((props) => ({
    width: "100vw",
    backgroundColor: theme.palette.secondary.main,
  }));
  const ComponentWrapper = styled(Box)((props) => ({
    display: "flex",
    width: "100%",
    maxWidth: 1350,
    margin: "0px auto",
    padding: "4rem 1rem",
    justifyContent: "space-between",
    flexDirection: "column",
    [props.theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [props.theme.breakpoints.up("md")]: {
      padding: "4rem 6rem",
    },
  }));
  
  return (
    <>
      <Background>
        <ComponentWrapper>
          <Box maxWidth={500}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={1}
            >
              <Typography
                color={theme.palette.secondary.contrastText}
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
              color={theme.palette.secondary.contrastText}
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
            <Typography
              color={theme.palette.secondary.contrastText}
              fontSize={12}
            >
              Your e-mail :
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              gap={4}
              width={{ xs: "90vw", sm: "40vw", md: "380px" }}
            >
              <TextField variant="filled" sx={{ flexGrow: 1 }} />
              <Button variant="contained" color="primary" sx={{ p: 3, px: 5 }}>
                Subscribe
              </Button>
            </Box>
          </Box>
        </ComponentWrapper>
      </Background>
    </>
  );
};

export default StayInTheKnow;
