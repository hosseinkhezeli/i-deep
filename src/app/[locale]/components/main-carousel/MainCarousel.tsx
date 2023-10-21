"use client";
import React, { useState } from "react";
//slider
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
//i18n

//mui
import { Box } from "@mui/material";
import styled from "@mui/material/styles/styled";
import useTheme from "@mui/material/styles/useTheme"
//images
import CarouselImage1 from "@public/images/rectangle-34624746.png";
import CarouselImage2 from "@public/images/ai-innovation-7f5e61b7.webp";
import CarouselSlide from "./components/CarouselSlider";
import { useTranslations } from "next-intl";

const MainCarousel = () => {
  //hooks
  const t = useTranslations("IndexPage.Maincarousel")
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

  const theme =useTheme()


  //components
  function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void;
  }) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-11 -12 50 50"
      >
        {props.left && (
          <path
            fill={theme.palette.secondary.contrastText}
            d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
          />
        )}
        {!props.left && (
          <path
          fill={theme.palette.secondary.contrastText}
            d="M6 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
          />
        )}
      </svg>
    );
  }
  
  const ArrowWrapper = styled(Box)((props) => ({
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "50vh",
    [props.theme.breakpoints.up("md")]: {
      top: "32vw",
    },
    [props.theme.breakpoints.up("xl")]: {
      top: "50%",
    },
  }));


  //data & initial values
const carouselData=[
  {
    image:CarouselImage1,
    header:t("slide1.header"),
    subHeader:t("slide1.subHeader"),
    title:t("slide1.title"),
    text:t("slide1.text"),
    buttonCaption:t("slide1.buttonCaption"),
  },
  {
    image:CarouselImage2,
    header:t("slide2.header"),
    subHeader:t("slide2.subHeader"),
    title:t("slide2.title"),
    text:t("slide2.text"),
    buttonCaption:t("slide2.buttonCaption"),
  }
]
  
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {carouselData.map((carousel:any,index:number)=>(
          <div key={index} className={`keen-slider__slide number-slide${index+1}`} style={{display:`${index>0?"flex":"block"}`,alignItems:"center"}}>
            <CarouselSlide
              image={carousel.image}
              header={carousel.header}
              subHeader={carousel.subHeader}
              title={carousel.title}
              text={carousel.text}
              buttonCaption={carousel.buttonCaption}
            />
          </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            {currentSlide === 1 && (
              <ArrowWrapper left={{ xs: 0, sm: 10, xl: "220px" }}>
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={false}
                />
              </ArrowWrapper>
            )}
            {currentSlide === 0 && (
              <ArrowWrapper right={{ xs: 0, sm: 10, xl: "220px" }}>
                <Arrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </ArrowWrapper>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MainCarousel;



