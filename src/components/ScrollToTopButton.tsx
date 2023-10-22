"use client";

import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <Button
      sx={{
        opacity: isVisible ? "1" : "0",
        position: "fixed",
        width:50,
        height:50,
        minWidth:"unset",
        minHeight:"unset",
        bottom: 50,
        right: 50,
        backgroundColor: theme.palette.primary.light,
        borderRadius:"50%",
        ":hover":{
            backgroundColor: theme.palette.primary.main,
            color:theme.palette.common.white,
        }
      }}
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon fontSize="medium" />
    </Button>
  );
};

export default ScrollToTopButton;
