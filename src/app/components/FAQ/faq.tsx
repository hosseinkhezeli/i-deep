import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import BasicAccordion from "./components/basic-accordion";

const FAQ = () => {
  return (
    <>
      <Box maxWidth={1536} mx="auto" my={"10rem"}>
        <Typography
          variant="h2"
          fontSize={{ xs: "24px", md: "48px" }}
          textAlign={"center"}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
        variant="h5"
          sx={{
            fontSize: { xs: "14px", md: "20px" },
            maxWidth: { xs: "300px", md: "unset" },
            textAlign: { xs: "center"},
            margin: { xs: "40px", md: "70px" },
          }}
        >
          If you don't see what's on your mind, reach out to us anytime.
        </Typography>
        <BasicAccordion />
      </Box>
    </>
  );
};

export default FAQ;
