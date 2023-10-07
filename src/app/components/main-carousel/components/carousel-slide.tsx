"use client";
import { lightPalette } from "@/theme/components/palette/light/lightPalette";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Props = {
  image: StaticImageData;
  header: string;
  subHeader: string;
  title: string;
  text: string;
  buttonCaption: string;
};

const CarouselSlide = ({
  image,
  header,
  subHeader,
  title,
  text,
  buttonCaption,
}: Props) => {
  const screenWidth = useWindowSize();
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        maxWidth={1536}
        mx={"auto"}
        gap={{ md: "1vw", xl: "4vw" }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          my={{ xs: 4, md: 0 }}
          width={{ xs: "100vw", md: "max-content" }}
          paddingRight={{ xs: 0, md: "2vw" }}
          flexBasis={"50%"}
        >
          <Image
            src={image}
            alt={"Co-workers in the office"}
            sizes="(min-width: 808px) 80vw, 80vw"
            quality={2}
            style={{
              width: `${screenWidth && screenWidth < 900 ? "auto" : "40vw"}`,
              height: "auto",
              boxShadow: `-20px 20px 0px 0px ${lightPalette.secondary.main}`,
              borderRadius: "0.625rem",
              transform: "translateX(2vw)",
              marginBottom: `${
                screenWidth && screenWidth < 900 ? "5vw" : "20px"
              }`,
              maxWidth: `${
                screenWidth && screenWidth < 900 ? "400px" : "600px"
              }`,
            }}
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row", md: "column" }}
          justifyContent={{ xs: "center" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          flexBasis={"50%"}
          width={{ md: "max-content" }}
          mx={{ xs: "auto", md: "0" }}
          gap={{ xs: "0", lg: "80px", xl: "160px" }}
        >
          <Box
            width={{ xs: "100%", sm: "max-content" }}
            display={"flex"}
            alignItems={{ xs: "center", md: "flex-start" }}
            flexDirection={"column"}
          >
            <Typography
              width={"max-content"}
              bgcolor={lightPalette.secondary.main}
              variant="h3"
              color={lightPalette.text.back}
              fontSize={{ md: "7vw", lg: "6vw", xl: "88px" }}
              p={"16px"}
              py={{ md: "2.5vw", xl: "35px" }}
              px={{ md: "20px" }}
              borderRadius={"0.2rem"}
            >
              {header}
            </Typography>
            <Typography
              width={"max-content"}
              variant="h2"
              fontWeight={{ md: 400 }}
              fontSize={{ md: "7vw", lg: "6vw", xl: "88px" }}
              p={{ xs: "16px", md: "3vw", xl: "20px" }}
              pl={{ md: 0 }}
              my={{ xl: 5 }}
            >
              {subHeader}
            </Typography>
          </Box>
          <Box
            width={{ xs: "100%", sm: "max-content" }}
            display={"flex"}
            alignItems={{ xs: "center", md: "flex-start" }}
            flexDirection={"column"}
            gap={{ xs: 4, md: "2.5vw", lg: "2vw", xl: "30px" }}
          >
            <Typography
              width={{ md: "fit-content" }}
              maxWidth={{ xs: 410, md: "40vw", xl: "700px" }}
              px={{ xs: 3, md: "0" }}
              variant="h5"
              fontSize={{ xs: "initial", md: "1.7vw", lg: "1.6vw", xl: "24px" }}
            >
              {title}
            </Typography>
            <Typography
              width={"fit-content"}
              maxWidth={{ xs: 410, md: "40vw", xl: "700px" }}
              px={{ xs: 6, md: 1 }}
              variant="body1"
              fontSize={{ md: "1.4vw", lg: "17px", xl: "20px" }}
            >
              {text}
            </Typography>
            <Button
              sx={{
                px: { xs: "1.5rem", md: "3rem" },
                py: { md: "1rem" },
                fontSize: { md: "14px", lg: "16px" },
              }}
            >
              {buttonCaption}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CarouselSlide;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerWidth);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
