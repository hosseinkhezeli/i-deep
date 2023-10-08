"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box, Button, Typography } from "@mui/material";

export default function VideoSlider() {
  const screenWidth = useWindowSize();
  const videoLinks = [
    "/videos/jason.mp4",
    "/videos/helia.mp4",
    "/videos/natalie.mp4",
    "/videos/rose.mp4",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [slidePerView, setSlidePerView] = useState(3);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: slidePerView,
      spacing: 50,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  useEffect(() => {
    if (screenWidth! < 500) {
      setSlidePerView(1);
    } else if (screenWidth! > 500 && screenWidth! < 900) {
      setSlidePerView(2);
    } else {
      setSlidePerView(3);
    }
  }, [screenWidth]);
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h2"
        textAlign="center"
        fontSize={{ xs: "32px", sm: "38px", md: "50px" }}
        lineHeight={"120%"}
        maxWidth={{xs:"max-content",md:"500px"}}
        mx={"auto"}
        my={"2rem"}
      >
        Others have made these videos!
      </Typography>
      <div className="navigation-wrapper navigation_ai_video">
        <div ref={sliderRef} className="keen-slider">
          {videoLinks.map((link: string, index: number) => (
            <div
              key={index}
              className="keen-slider__slide slide_ai_video"
              style={{
                width: "auto",
                height: "auto",
                padding: "2rem 0px",
                border: "1px solid black",
                borderRadius: 10,
              }}
            >
              <video
                preload=""
                controls
                style={{ width: "100%", height: "auto" }}
              >
                <source src={link} />
              </video>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div style={{ width: "max-content", margin: "0 auto" }}>
            {[
              ...Array(
                instanceRef.current?.track.details.slides.length -
                  slidePerView +
                  1
              ).keys(),
            ].map((idx) => {
              return (
                <Button
                  sx={{
                    p: 0,
                    width: 10,
                    height: 10,
                    minHeight: 10,
                    minWidth: `${currentSlide === idx ? "20px" : "10px"}`,
                    backgroundColor: `${
                      currentSlide === idx ? "#0289cc" : "#C7BFCD"
                    }`,
                    margin: "0 2px",
                  }}
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </Box>
  );
}

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
