"use client"
//react
import React from "react";
//next
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Button, List, ListItem, ListItemIcon } from "@mui/material";
import styled from "@mui/material/styles/styled"
import theme from "@/theme/theme";
//types
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
    <Background>
      <ComponentWrapper
        bgcolor={layout === "dark" ? theme.palette.secondary.main : theme.palette.secondary.contrastText}
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
                ? theme.palette.secondary.contrastText
                : theme.palette.secondary.main
            }
            fontSize={{ xs: "inherit", md: 50 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color={
              layout === "dark"
              ? theme.palette.secondary.contrastText
              : theme.palette.secondary.main
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
                    ? theme.palette.secondary.contrastText
                    : theme.palette.secondary.main
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
              ":hover": { bgcolor: theme.palette.primary.light },
            }}
          >
            <Link
              href={link}
              style={{
                display: "flex",
                alignItems: "center",
                color: theme.palette.primary.main,
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
          bgcolor="inherit"
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
      </ComponentWrapper>
    </Background>
  );
};

export default PlatformCard;

const Background = styled(Box)(()=>({
  padding:"0px 16px",
  margin:"auto 16px"
}))

const ComponentWrapper = styled(Box)((props)=>({
  position:"relative",
  width:"100%",
  borderRadius:theme.shape.borderRadius,
  display:"flex",
  alignItems:"center",
  maxWidth:1490,
  margin:"2rem auto",
  padding:"16px 0px",
  gap:8,
  boxShadow:`0px 0px 10px 0px ${theme.palette.mode==="dark"?theme.palette.primary.light:theme.palette.secondary.light}`,
  flexDirection:"column",
  [props.theme.breakpoints.up("md")]:{
    flexDirection:"row",
  }

}))