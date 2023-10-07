import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ThinkingRobot from "@public/images/thinkingAironman.webp";
import { lightPalette } from "@/theme/components/palette/light/lightPalette";

const GetAiServices = () => {
  return (
    <>
      <Box width={"100vw"} bgcolor={lightPalette.secondary.main}>
        <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} maxWidth={1300} mx={"auto"}>
          <Box
            mx={"auto"}
            width={"100%"}
            display={"flex"}
            flexBasis={{xs:"50%",lg:"40%"}}
            order={{ xs: 2 }}
            alignItems={"flex-end"}
          >
            <Image
              src={ThinkingRobot}
              alt="Thinking Robot"
              sizes="(min-width: 808px) 80vw, 80vw"
              quality={100}
              style={{
                width: "100%",
                height: "max-content",
                maxHeight: "500px",
                maxWidth: "430px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            px={4}
            py={14}
            gap={8}
            flexBasis={{xs:"50%",lg:"60%"}}
            order={{ xs: 1 }}
          >
            <Typography
              color={lightPalette.secondary.back}
              variant="h2"
              fontSize={{ xs: 24, md: 48 }}
              textAlign={{ xs: "center" }}
            >
              Get AI Services
            </Typography>
            <Typography
              color={lightPalette.secondary.back}
              variant="body1"
              padding={4}
              textAlign={"justify"}
              lineHeight={"200%"}
              fontSize={{xs:14,md:18}}
            >
              Imagine simplifying your tasks effortlessly with our AI services,
              from converting speech to text using ASR to creating engaging
              content through Text-to-Video. Our AI streamlines your operations,
              makes things more accessible, and opens up new possibilities. You
              can communicate seamlessly across languages, reaching a broader
              audience. Dive into the future of AI with us, where complexity
              transforms into simplicity and innovation knows no bounds. Explore
              our AI services and tap into the limitless potential they offer.
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <Button
                sx={{
                  width: "max-content",
                  bgcolor: lightPalette.secondary.back,
                  color: lightPalette.secondary.main,
                  px: 15,
                  py: 4,
                  fontWeight: 600,
                  ":hover": {
                    bgcolor: lightPalette.secondary[75],
                    color: lightPalette.secondary.back,
                  },
                }}
              >
                Explore Now !
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GetAiServices;
