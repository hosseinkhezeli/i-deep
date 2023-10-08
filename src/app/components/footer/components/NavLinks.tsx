import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const navLinks = [
    {
      title: "Our Services",
      links: [
        {
          title: "AI services",
          link: "/ai-services",
        },
        {
          title: "text to video",
          link: "ai-services/ai-video-generation",
        },
      ],
    },
    {
      title: "About Us",
      links: [
        {
          title: "About iDeep",
          link: "/about-us",
        },
        {
          title: "our team",
          link: "/",
        },
      ],
    },
    {
      title: "Contact us",
      links: [
        {
          title: "+971-54 555 4249",
          link: "*",
        },
        {
          title:
            "PO Box 282741, Unit 02/02,One JLT Dubai, United Arab Emirates",
          link: "*",
        },
      ],
    },
  ];

  return (
    <>
      <Box display={"flex"} flexDirection={{xs:"column",sm:"row"}} gap={{xs:10,sm:0}} my={8} maxWidth={1536} width={"100%"} mx={"auto"}>
        {navLinks.map((item: any) => (
          <Box flexBasis={"33%"} display={"flex"} flexDirection={"column"}>
            <Typography variant="h5">{item.title}</Typography>
            {item.links.map((linkItem: any) => (
              <Link href={linkItem.link} style={{color:"inherit"}}>{linkItem.title}</Link>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default NavLinks;
