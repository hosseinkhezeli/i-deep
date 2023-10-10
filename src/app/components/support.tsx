"use client";
//react
import React from "react";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
//next
import Image, { StaticImageData } from "next/image";
//image
import AvailabilityIcon from "@public/images/availability.svg";
import ClientApproachIcon from "@public/images/customer-service.svg";
import ClientCareIcon from "@public/images/shield.svg";

const Support = () => {
  return (
    <>
      <ComponentWrapper>
        <Typography
          display={"inline-block"}
          variant="h2"
          fontSize={{ xs: "24px", md: "48px" }}
        >
          24/7 Support
        </Typography>
        <Typography
          display={"inline-block"}
          variant="h5"
          maxWidth={{ xs: "90vw", sm: 400, md: "unset" }}
          fontWeight={400}
          fontSize={{ xs: 18, md: 22 }}
          textAlign={{ xs: "center" }}
        >
          Providing all the help you need
        </Typography>
        <Typography
          display={"inline-block"}
          variant="h5"
          px={"2rem"}
          maxWidth={{ xs: "90vw", sm: 400, md: "1100px" }}
          fontWeight={400}
          fontSize={{ xs: 14, md: 18 }}
          textAlign={{ xs: "center" }}
        >
          At iDeep, we are committed to providing exceptional support to our
          clients. Our 24/7 support team is always ready to assist you with any
          questions or issues you may encounter. We pride ourselves on being
          client-oriented, ensuring that your needs and concerns are our top
          priority. You can rely on us for responsive, reliable, and
          personalized support, making your experience with our AI services as
          smooth as possible.
        </Typography>

        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ xs: 10, md: 20 }}
        >
          {titleItems.map((item: string, index: number) =>
            iconItems(
              index,
              item,
              descriptionItems[index],
              iconImageItems[index]
            )
          )}
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default Support;

const ComponentWrapper = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 1360,
  margin: "10px auto",
  gap: 20,
  [props.theme.breakpoints.up("md")]: {
    gap: 50,
    margin: "50px auto",
  },
}));

const ItemWrapper = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0px 4px",
  // gap: 2,
}));

const iconItems = (
  key: number,
  title: string,
  description: string,
  iconImage: StaticImageData
) => (
  <ItemWrapper key={key}>
    <Box>
      <Image
        src={iconImage}
        alt="icon"
        sizes="(min-width: 808px) 80vw, 80vw"
        quality={2}
        style={{
          width: "85px",
          height: "85px",
        }}
      />
    </Box>
    <Typography display={"inline-block"} variant="h5" width={"fit-content"}>
      {title}
    </Typography>
    <Typography
      display={"inline-block"}
      variant="subtitle1"
      textAlign={"center"}
      maxWidth={300}
    >
      {description}
    </Typography>
  </ItemWrapper>
);

const titleItems = [
  "24/7 AVAILABILITY",
  "CLIENT-CENTRIC APPROACH",
  "RESPONSIVE AND RELIABLE",
];
const descriptionItems = [
  "We're here round the clock, ensuring help is just a call or click away, anytime you need it.",
  "Your needs and concerns sit at the forefront of our priorities, guiding our every action.",
  "Depend on us for swift responses and unwavering reliability, delivering solutions when you need them most.",
];
const iconImageItems = [AvailabilityIcon, ClientApproachIcon, ClientCareIcon];
