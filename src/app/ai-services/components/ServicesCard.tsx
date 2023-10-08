import Box from "@mui/material/Box";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type Props = {
  link: string;
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  isActive: boolean;
};

const ServicesCard = ({
  link,
  image,
  title,
  subtitle,
  description,
  isActive,
}: Props) => {
  return (
    <Link
      href={link}
      style={{
        pointerEvents: `${isActive ? "auto" : "none"}`,
        display: "content",
      }}
    >
      <Box
        position={"relative"}
        boxShadow={"0px 16px 48px 0px rgba(0,0,0,0.1)"}
        width={{ xs: "100%" }}
        maxWidth={{ xs: "unset", md: "477px" }}
        p={7}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        borderRadius={5}
        gap={2}
      >
        {!isActive && (
          <Box
            bgcolor={"#ffffff60"}
            position={"absolute"}
            width={"100%"}
            height={{xs:"96%",md:"94%"}}
            maxWidth={{ xs: "unset", md: "477px" }}
            borderRadius={5}
           
          />
        )}

        <Image
          src={image}
          alt="Face recognition"
          style={{ width: "100%", height: "100%" }}
        />
        <Typography variant="h5" fontSize={"20px"}>
          {title}
        </Typography>
        <Typography variant="h5" fontSize={"16px"}>
          {subtitle}
        </Typography>
        <Typography
          variant="body1"
          maxWidth={"95%"}
          textAlign={"justify"}
          mx={"auto"}
        >
          {description}
        </Typography>
      </Box>
    </Link>
  );
};

export default ServicesCard;
