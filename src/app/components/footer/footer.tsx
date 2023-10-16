"use client"
//next
import Link from "next/link";
import Image from "next/image";
//mui
import { Box, Typography, Divider } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme"
import styled from "@mui/material/styles/styled"
//images
import FacebookIcon from "@public/images/facebook-filled.svg";
import LinkedinIcon from "@public/images/linkedin-filled.svg";
import TwitterIcon from "@public/images/twitter-filled.svg";
//components
import NavLinks from "./components/NavLinks";

const Footer = () => {
  //hooks
  const theme = useTheme()

  //components
  const FooterWrapper = styled(Box)((props)=>({
    width:"100%",
    height:59,
    bgcolor:theme.palette.secondary.main,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    padding:"0 15px",
    [props.theme.breakpoints.up("md")]:{
      padding:"0 80px",
    }

  }))
  return (
    <>
      <Divider sx={{ width: "99%", margin: "10rem auto 0 auto" }} />
      <Box display={"flex"} flexDirection={"column"} width={"100vw"} px={20}>
        <NavLinks />
        <Box
          maxWidth={1536}
          width={"100%"}
          mx={"auto"}
          my={8}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: "50px",
          }}
        >
          {socials.map((item, index) => (
            <Link key={index} href={item.link}>
              <Image src={item.logo} alt="social media icon" />
            </Link>
          ))}
        </Box>
      </Box>
      <FooterWrapper>
        <Box
          sx={{
            maxWidth: "1496px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "10px", md: "14px" }, color: theme.palette.text.primary }}
          >
            2023. iDeep.ai. All rights reserved
          </Typography>
          <Box
            display="flex"
            sx={{
              a: { fontSize: { xs: "10px", md: "14px" }, color: theme.palette.text.primary },
            }}
          >
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms Of Use</Link>
          </Box>
        </Box>
      </FooterWrapper>
    </>
  );
};

export default Footer;

//data & initial values
const socials = [
  {
    logo: TwitterIcon,
    link: "/",
  },
  {
    logo: FacebookIcon,
    link: "/",
  },
  {
    logo: LinkedinIcon,
    link: "/",
  },
];