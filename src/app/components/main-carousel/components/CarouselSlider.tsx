"use client";
//react
import { useEffect, useState } from "react";
//mui
import theme from "@/theme/theme";
import  styled  from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//next
import Image, { StaticImageData } from "next/image";
import { PaletteMode } from "@mui/material";
import { getState } from "@/context/store";

type Props = {
  image: StaticImageData;
  header: string;
  subHeader: string;
  title: string;
  text: string;
  buttonCaption: string;
};
const activeTheme:PaletteMode = getState().layoutTheme.layoutTheme
const CarouselSlide = ({
  image,
  header,
  subHeader,
  title,
  text,
  buttonCaption,
}: Props) => {
  //hooks
  const screenWidth = useWindowSize();
  //function
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
  
  //components
  const ImageWrapper = styled(Box)((props) => ({
    display: "flex",
    justifyContent: "center",
    flexBasis: "50%",
    [props.theme.breakpoints.up("xs")]: {
      margin:"0px 4px",
      width: "100vw",
      paddingRight: 0,
    },
    [props.theme.breakpoints.up("md")]: {
      margin:"0px 0px",
      width: "max-content",
      paddingRight: "2vw",
    },
  }));
  
  const ComponentWrapper = styled(Box)((props) => ({
    display: "flex",
    maxWidth: 1536,
    margin:"0px auto 2rem auto",
    gap: "15px",
    [props.theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
    [props.theme.breakpoints.up("md")]: {
      gap: "1vw",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [props.theme.breakpoints.up("xl")]: {
      gap: "4vw",
    },
  }));
  const ContentWrapper = styled(Box)((props) => ({
    display: "flex",
    flexBasis: "50%",
    justifyContent: "center",
    [props.theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      margin:"0px auto",
      gap: 0
    },
    [props.theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [props.theme.breakpoints.up("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      width: "max-content",
      margin:"0px",
    },
    [props.theme.breakpoints.up("lg")]: {
      gap: "80px",
    },
    [props.theme.breakpoints.up("xl")]: {
      gap: "100px",
    },
  }));
  return (
    <>
      <ComponentWrapper>
        <ImageWrapper>
          <Image
            src={image}
            alt={"Co-workers in the office"}
            sizes="(min-width: 808px) 80vw, 80vw"
            quality={2}
            style={{
              width: `${screenWidth && screenWidth < 900 ? "auto" : "40vw"}`,
              height: "auto",
              boxShadow: `-20px 20px 0px 0px ${theme(activeTheme).palette.secondary.main}`,
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
        </ImageWrapper>
        <ContentWrapper>
          <Box
            width={{ xs: "100%", sm: "max-content" }}
            display={"flex"}
            alignItems={{ xs: "center", md: "flex-start" }}
            flexDirection={"column"}
          >
            <Typography
              width={"max-content"}
              bgcolor={theme(activeTheme).palette.secondary.main}
              variant="h3"
              color={theme(activeTheme).palette.secondary.contrastText}
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
              my={{ xl: 2 }}
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
            variant="contained"
              sx={{
                px: { xs: "1.5rem", md: "3rem" },
                py: { md: "1rem" },
                fontSize: { md: "14px", lg: "16px" },
              }}
            >
              {buttonCaption}
            </Button>
          </Box>
        </ContentWrapper>
      </ComponentWrapper>
    </>
  );
};

export default CarouselSlide;


