"use client";
//react
import React from "react";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
//icons
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import useTheme from "@mui/material/styles/useTheme"

const LocationBanner = () => {
  //hooks
  const theme = useTheme()

  //components
  const ComponentWrapper = styled(Box)((props) => ({
    width: "90%",
    maxWidth: 1480,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    margin: "3rem auto",
    padding: "32px 16px",
    gap: 20,
    height: "auto",
    [props.theme.breakpoints.up("sm")]: {
      padding: "32px 32px",
    },
    [props.theme.breakpoints.up("md")]: {
      padding: "4px 32px",
      flexDirection: "row",
      height: "480px",
    },
  }));
  
  const MapComponentWrapper = styled(Box)((props) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "unset",
    justifyContent: "center",
    height: "60vw",
    flexBasis: "unset",
    [props.theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
      height: "100%",
      flexBasis: "60%",
      padding: "12px 0px",
    },
  }));
  const ContactInformationWrapper = styled(Box)((props)=>({
    display:"flex",
    flexDirection:"column",
    height:"100%",
    justifyContent:"space-evenly",
    flexBasis:"50%",
    mx:"auto",
    width:"fit-content",
    gap:10,
    [props.theme.breakpoints.up("md")]:{
      gap:0
    }
  
  }))
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
      <ComponentWrapper>
        <ContactInformationWrapper>
          {contactData.map(
            (item: { icon: any; content: string }, index: number) => (
              <Box key={index} display={"flex"} gap={4}>
                {item.icon}
                <Typography variant="body2" color={theme.palette.secondary.contrastText}>
                  {item.content}
                </Typography>
              </Box>
            )
          )}
        </ContactInformationWrapper>
        <MapComponentWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1145.4324138638458!2d51.39116136111359!3d35.70722523334853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQyJzI2LjAiTiA1McKwMjMnMzAuMCJF!5e0!3m2!1sen!2sde!4v1693060580236!5m2!1sen!2sde"
            style={{
              border: "0",
              borderRadius: "15px",
              width: "100%",
              height: "100%",
              maxWidth: "480px",
            }}
            // @ts-ignore
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapComponentWrapper>
      </ComponentWrapper>
    </>
  );
};

export default LocationBanner;

