//next
import Link from "next/link";
import Image from "next/image";
//mui
import { Box, Typography, Divider, useTheme } from "@mui/material";
//images
import FacebookIcon from "@public/images/facebook-filled.svg";
import LinkedinIcon from "@public/images/linkedin-filled.svg";
import TwitterIcon from "@public/images/twitter-filled.svg";
//components
import NavLinks from "./components/NavLinks";

const Footer = () => {
  //hooks
  const theme = useTheme()
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
      <Box
        width={"100%"}
        height={59}
        bgcolor={theme.palette.secondary.main}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={{ xs: "0 15px", md: "0 80px" }}
      >
        <Box
          sx={{
            maxWidth: "1496px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "10px", md: "14px" }, color: "#f6f6f6" }}
          >
            2023. iDeep.ai. All rights reserved
          </Typography>
          <Box
            display="flex"
            sx={{
              a: { fontSize: { xs: "10px", md: "14px" }, color: "#f6f6f6" },
            }}
          >
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms Of Use</Link>
          </Box>
        </Box>
      </Box>
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