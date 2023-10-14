import { Metadata } from "next/types";
import React from "react";
import HeroBanner from "./components/HeroBanner";
import ContactForm from "./components/ContactForm";
import { Box } from "@mui/material";
import Content from "./components/Content";
import LocationBanner from "./components/LocationBanner";
export const metadata: Metadata = {
  title: "iDeep_Contact us",
  description: "Contact information of iDeep Company",
};

const ContactUs = () => {
  return (
    <>
      <HeroBanner />
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        maxWidth={1536}
        mx={"auto"}
        px={{ xs: 4, sm: 8 }}
        width={"95%"}
        gap={{xs:8}}
      >
        <Box flexBasis={"50%"}>
       <Content/>
        </Box>
        <Box flexBasis={"50%"} display={"flex"} justifyContent={{xs:"center",md:"flex-end"}}>
          <ContactForm />
        </Box>
      </Box>
      <LocationBanner/>
    </>
  );
};

export default ContactUs;
