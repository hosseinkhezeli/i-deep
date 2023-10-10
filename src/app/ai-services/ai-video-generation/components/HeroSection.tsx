//next
import Link from "next/link";
import Image from "next/image";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//image
import WomanImage from "@public/images/woman-laugh.png";

const HeroSection = () => {
  return (
    <>
      <Typography
        variant="h6"
        fontSize={16}
        textAlign={"center"}
        letterSpacing={"-0.5px"}
        lineHeight={"110%"}
        fontWeight={500}
        maxWidth={{ xs: "200px", sm: "max-content" }}
      >
        <span
          style={{
            fontSize: "14px",
            letterSpacing: "1px",
            color: lightPalette.primary.main,
          }}
        >
          #1
        </span>{" "}
        AI VIDEO GENERATION PLATFORM
      </Typography>
      <Typography
        variant="h2"
        textAlign={"center"}
        fontSize={{ xs: "32px", sm: "38px", md: "50px" }}
        lineHeight={"120%"}
        maxWidth={{ xs: "300px", sm: "360px", md: "480px" }}
      >
        Turn your text into videos in minutes
      </Typography>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        width={"100%"}
        justifyContent={{xs:"space-between"}}
        gap={10}
      >
        <Box order={{ xs: 1, md: 2 }} width={"90vw"} maxWidth={475}>
          <Image
            src={WomanImage}
            alt="smiling woman"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          order={{ xs: 2, md: 1 }}
          my={10}
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ xs: "center", md: "flex-start" }}
          justifyContent={{ md: "space-between" }}
          height={{ xs: "auto", md: "500px" }}
          px={4}
          gap={4}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={10}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Typography
              variant="h2"
              textAlign={{ xs: "center", md: "left" }}
              fontSize={{ xs: "32px", sm: "38px", md: "50px" }}
              lineHeight={"120%"}
              maxWidth={"max-content"}
            >
              Features provided:
            </Typography>
            <Typography
              variant="h5"
              textAlign={{ xs: "center", md: "left" }}
              fontWeight={500}
              fontSize={{ xs: 16, md: 20 }}
              maxWidth={"100%"}
            >
              Get natural sounding AI voices in 120+ languages!
              <br />
              <br />
              Make your videos more engaging with 140+ AI Avatars.
              <br />
              <br />
              Edit as simply as a slide-deck, no experience required.
              <br />
              <br />
            </Typography>
          </Box>
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={"center"}
            gap={3}
          >
            <Link href={"ai-video-generation/try"} style={{flexGrow: 1}}>
            <Button
            variant="outlined"
            color="primary"
              sx={{
                width:"100%",
                px: 4,
                py: 1.5,
              }}
            >
              Create a free Ai video !
            </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              sx={{
                flexGrow: 1,
                px: 4,
                py: 1.5,
              }}
            >
              Watch Sample Products!
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
