import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import React from "react";

import { lightPalette } from "@/theme/components/palette/light/lightPalette";

const LocationBanner = () => {
  const contactData = [
    {
      icon: <LocationOnOutlinedIcon color="primary" />,
      content: "PO Box 282741, Unit 02/02,One JLT Dubai, United Arab Emirates",
    },
    {
      icon: <AccessTimeOutlinedIcon color="primary" />,
      content: "9:00 - 20:00",
    },
    {
      icon: <MailOutlinedIcon color="primary" />,
      content: "info@ideep.com",
    },
    {
      icon: <PhoneIphoneOutlinedIcon color="primary" />,
      content: "+971-54 555 4249",
    },
  ];
  return (
    <>
      <Box
        width={"90%"}
        height={{ xs: "auto", md: "480px" }}
        maxWidth={1480}
        mx={"auto"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={lightPalette.secondary.main}
        borderRadius={3}
        px={{ xs: 8, sm: 16 }}
        py={{ xs: 16, md: 2 }}
        my={"3rem"}
        gap={20}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"100%"}
          justifyContent={"space-evenly"}
          flexBasis={"50%"}
          mx={"auto"}
          width={"fit-content"}
          gap={{xs:10,md:0}}
        >
          {contactData.map(
            (item: { icon: any; content: string }, index: number) => (
              <Box key={index} display={"flex"} gap={4}>
                {item.icon}
                <Typography variant="body2" color={lightPalette.secondary.back}>
                  {item.content}
                </Typography>
              </Box>
            )
          )}
        </Box>
        <Box
          flexBasis={{xs:"unset",md:"60%"}}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems={"center"}
          height={{xs:"60vw",md:"100%"}}
          width={"100%"}
          py={{xs:"unset",md:6}}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1145.4324138638458!2d51.39116136111359!3d35.70722523334853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQyJzI2LjAiTiA1McKwMjMnMzAuMCJF!5e0!3m2!1sen!2sde!4v1693060580236!5m2!1sen!2sde"
            style={{
              border: "0",
              borderRadius: "15px",
              width: "100%",
              height: "100%",
              maxWidth:"480px"
            }}
            // @ts-ignore
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </>
  );
};

export default LocationBanner;
