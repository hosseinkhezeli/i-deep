"use client";
//react
import React from "react";
//next
import Image from "next/image";
//images
import TeamImage from "@public/images/exited-people.webp";
import BGTexture from "@public/images/isolation.svg";
//mui
import { Box, Typography} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme"
import styled from "@mui/material/styles/styled";

const Contents = () => {
  //hooks
  const theme = useTheme();

  //components
  const ComponentWrapper = styled(Box)((props) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 1536,
    overflow: "hidden",
    margin: "0px auto",
    padding: "68px 20px",
    gap: 10,
    [props.theme.breakpoints.up("md")]: {
      padding: "68px 40px",
    },
    [props.theme.breakpoints.up("lg")]: {
      gap: 20,
    },
  }));
  return (
    <ComponentWrapper>
      <Image
        src={BGTexture}
        alt="background texture"
        style={{
          width: "100vw",
          height: "auto",
          maxWidth: "1000px",
          position: "absolute",
          transform: "rotate(54deg)",
          top: "calc(7% + 50vw)",
          right: "-20%",
          zIndex: "-1",
        }}
      />
      <Image
        src={BGTexture}
        alt="background texture"
        style={{
          width: "100vw",
          height: "auto",
          maxWidth: "1000px",
          position: "absolute",
          transform: "rotate(54deg)",
          top: "85%",
          left: "-20%",
          zIndex: "-1",
        }}
      />
      <Typography
        variant="h2"
        fontSize={{ xs: "35px", md: "50px" }}
        fontWeight={500}
        textAlign={"center"}
        lineHeight={"150%"}
      >
        Welcome to iDeep
      </Typography>
      <Typography
        variant="h4"
        fontSize={{ xs: "20px", md: "32px" }}
        textAlign={"center"}
        lineHeight={"150%"}
      >
        where innovation and technology converge to transform industries and
        redefine possibilities
      </Typography>
      <Image
        src={TeamImage}
        alt="Team members"
        quality={60}
        style={{
          width: "90vw",
          height: "max-content",
          maxWidth: "1300px",
        }}
      />
      <div>
        <Typography
          variant="h2"
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign={"center"}
          my={8}
        >
          Our humble beginning
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", md: "20px" }}
          textAlign={"center"}
        >
          Founded in 2009 by visionary entrepreneur Mohammad Masouri, we began
          as a humble startup with a singular mission: to revolutionize the way
          construction projects were managed using cutting-edge CCTV technology.
        </Typography>
      </div>
      <div>
        <Typography
          variant="h2"
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign={"center"}
          my={8}
        >
          The Turning Point (2013)
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", md: "20px" }}
          textAlign={"center"}
        >
          In 2013, a significant turning point occurred when two key
          stakeholders joined our ranks. Their expertise and shared vision
          catapulted us into a new realm of possibilities. Building on our
          experience with construction control systems, we shifted our focus
          towards developing a state-of-the-art Media Asset Management (MAM)
          solution
        </Typography>
      </div>
      <div>
        <Typography
          variant="h2"
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign={"center"}
          my={8}
        >
          Broadcasting Success (2014-Present)
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", md: "20px" }}
          textAlign={"center"}
        >
          The result was nothing short of extraordinary. Our media asset
          management system quickly evolved into our flagship product, embraced
          by national TV channels for its unrivaled capabilities. It became the
          cornerstone of iDeep's success, elevating us to a prominent position
          in the broadcasting industry
        </Typography>
      </div>
      <div>
        <Typography
          variant="h2"
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign={"center"}
          my={8}
        >
          Expanding Horizons
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", md: "20px" }}
          textAlign={"center"}
        >
          As our reputation grew, so did our ambitions. iDeep ventured into
          uncharted territories, leveraging our expertise to develop a diverse
          portfolio of successful software solutions and web applications. Our
          commitment to innovation and excellence remained unwavering.
        </Typography>
      </div>
      <div>
        <Typography
          variant="h2"
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign={"center"}
          my={8}
        >
          Pioneering AI Integration (Current Focus)
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", md: "20px" }}
          textAlign={"center"}
        >
          Throughout our journey, we've always had an eye on the future, and
          today, we proudly stand as pioneers in artificial intelligence
          integration. As technology continues to advance, so do we. Our latest
          endeavor brings you the power of AI with our customizable
          Speech-to-Avatar product. We're here to tailor this innovative
          technology to seamlessly integrate with your business, unlocking
          untapped potential and redefining how you communicate with your
          audience.
        </Typography>
      </div>
      <div>
        <Typography
          variant="h2"
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign={"center"}
          my={8}
        >
          Empowering Managers, Building Partnerships
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", md: "20px" }}
          textAlign={"center"}
        >
          At iDeep, we don't just excel in technology; we empower the next
          generation of managers. Our commitment to teaching and mentorship is
          the driving force behind our vision. We strive to create powerful
          managers who can not only handle challenges and fulfill customer
          requirements flawlessly but also mentor newcomers, ensuring a
          continuous cycle of growth and innovation.
        </Typography>
      </div>
      <div>
        <Typography
          variant="h2"
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign={"center"}
          my={8}
        >
          Your Reliable Partner
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", md: "20px" }}
          textAlign={"center"}
        >
          We understand the value chain like no other, and our technology allows
          us to provide customized solutions that are tailored to your unique
          needs. Whether 're a national broadcaster seeking to streamline
          operations or a business in need of innovative solutions, we are your
          trusted partner.
        </Typography>
      </div>
      <div>
        <Typography
          variant="h2"
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign={"center"}
          my={8}
        >
          Always There for You
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", md: "20px" }}
          textAlign={"center"}
        >
          In an ever-evolving technological landscape, iDeep stands as your
          reliable partner and integrator in AI. We offer 24/7 honest and
          on-time support for our products, ensuring that you always have the
          assistance you need to thrive in the digital age.
        </Typography>
      </div>
      <div>
        <Typography
          variant="h2"
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign={"center"}
          my={8}
        >
          Join Us on the Journey
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", md: "20px" }}
          textAlign={"center"}
        >
          At iDeep, we believe that every challenge is an opportunity for
          innovation, and every milestone is a stepping stone to the next. We're
          not just a software company; we're a collective of dreamers, creators,
          and visionaries committed to pushing the boundaries of what's possible
        </Typography>
      </div>
      <div>
        <Typography
          variant="h2"
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign={"center"}
          my={8}
          color={theme.palette.primary.main}
        >
          Let's Build the Future Together
        </Typography>
        <Typography
          variant="h4"
          fontSize={{ xs: "15px", md: "20px" }}
          textAlign={"center"}
        >
          Whether you're a national broadcaster looking to revolutionize your
          operations, a growing business navigating the complexities of
          technology, or an individual seeking to embark on a journey of
          personal and professional growth, iDeep is your trusted guide.
        </Typography>
      </div>
    </ComponentWrapper>
  );
};

export default Contents;
