"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import CarouselImage1 from "@public/images/rectangle-34624746.png";
import CarouselImage2 from "@public/images/ai-innovation-7f5e61b7.webp";
import { lightPalette } from "@/theme/components/palette/light/lightPalette";
import CarouselSlide from "./components/carousel-slide";

const MainCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <CarouselSlide
              image={CarouselImage1}
              header="Welcome"
              subHeader="To iDeep"
              title="Revolutionizing Business Through AI Excellence"
              text="With a wealth of AI expertise, we`re your trusted partner for turning ideas into technological wonders. With a focus on AI, we bring innovation to life with efficiency and precision"
              buttonCaption="Explore Our Vision!"
            />
          </div>
          <div
            className="keen-slider__slide number-slide2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <CarouselSlide
              image={CarouselImage2}
              header="AI"
              subHeader="Text To Video"
              title="Explore AI`s incredible transformation of text into captivating videos"
              text="Our technology simplifies the process , saving time and enhancing accessibility. Elevate your content creation effortlessly."
              buttonCaption="Explore Now!"
            />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            {currentSlide === 1 && (
              <Box
                width={20}
                height={20}
                borderRadius={"50%"}
                bgcolor={lightPalette.secondary.main}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"absolute"}
                top={{ xs: "50vh", md: "32vw", xl: "50%" }}
                left={{ xs: 0, sm: 10, xl: "220px" }}
              >
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={false}
                />
              </Box>
            )}
            {currentSlide === 0 && (
              <Box
                width={20}
                height={20}
                borderRadius={"50%"}
                bgcolor={lightPalette.secondary.main}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"absolute"}
                top={{ xs: "50vh", md: "32vw", xl: "50%" }}
                right={{ xs: 0, sm: 10, xl: "220px" }}
              >
                <Arrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </Box>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MainCarousel;

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11 -12 50 50"
    >
      {props.left && (
        <path
          fill="#EFF2F4"
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        />
      )}
      {!props.left && (
        <path
          fill="#EFF2F4"
          d="M6 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
        />
      )}
    </svg>
  );
}
