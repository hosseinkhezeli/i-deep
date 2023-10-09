import { lightPalette } from "@/theme/components/palette/light/lightPalette";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import MAMImage from "@public/images/plat-mediaManagment.png";
import { Button, List, ListItem, ListItemIcon } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  optionList: string[];
  link: string;
  image: StaticImageData;
  layout: string;
};

const PlatformCard = ({
  title,
  description,
  optionList,
  link,
  image,
  layout,
}: Props) => {
  return (
    <Box px={8} mx={"auto"} my={8}>
      <Box
        position={"relative"}
        bgcolor={layout === "dark" ? lightPalette.secondary.main : "white"}
        width={"100%"}
        borderRadius={2}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        maxWidth={1490}
        mx={"auto"}
        py={8}
        gap={8}
        boxShadow={"0px 16px 48px 0px rgba(0,0,0,0.1)"}
      >
        <Box
          width={{ xs: "100%", md: "50%" }}
          px={{ xs: 8, md: 14 }}
          display={"flex"}
          flexDirection={"column"}
          gap={6}
          flexBasis={"50%"}
          order={layout === "dark" ? 1 : 2}
        >
          <Typography
            variant="h2"
            color={
              layout === "dark"
                ? lightPalette.secondary.back
                : lightPalette.secondary.main
            }
            fontSize={{ xs: "inherit", md: 50 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color={
              layout === "dark"
                ? lightPalette.secondary.back
                : lightPalette.secondary.main
            }
          >
            {description}
          </Typography>
          <List>
            {optionList.map((item: string, index: number) => (
              <ListItem key={index} disablePadding>
                <ListItemIcon sx={{ minWidth: "max-content", mr: 2 }}>
                  <CircleIcon fontSize="inherit" color="primary" />
                </ListItemIcon>
                <Typography
                  fontWeight={600}
                  color={
                    layout === "dark"
                      ? lightPalette.secondary.back
                      : lightPalette.secondary.main
                  }
                >
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Button
            sx={{
              width: "20%",
              bgcolor: `${
                layout === "dark"
                  ? "initial"
                  : "inherit"
              }`,
              ":hover": { bgcolor: lightPalette.primary[20] },
            }}
          >
            <Link
              href={link}
              style={{
                display: "flex",
                alignItems: "center",
                color: lightPalette.primary.main,
              }}
            >
              <ArrowForwardOutlinedIcon />
              View more...
            </Link>
          </Button>
        </Box>
        <Box
          order={layout === "dark" ? 2 : 1}
          flexBasis={"50%"}
          width={"100%"}
          px={0}
          display={"flex"}
          justifyContent={layout === "dark" ? "flex-end" : "flex-start"}
        >
          <Image
            src={image}
            alt="Platform mockup image"
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "430px",
              maxWidth: "553px",
              marginRight: "-1px",
              marginLeft: "-1px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PlatformCard;
