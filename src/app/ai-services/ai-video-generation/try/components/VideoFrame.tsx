"use client";
//react
import React from "react";
//next
import Image from "next/image";
//image
import VideoBGImage from "@public/images/video_bg.png";
//mui
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

const VideoFrame = () => {
  return (
    <ComponentWrapper>
      <Image
        src={VideoBGImage}
        alt="Ai video generate panel"
        style={{ width: "100%", height: "auto", borderRadius: 10 }}
      />
      <video
        muted
        autoPlay={true}
        src="/videos/transparentAvatar.webm"
        loop
        style={{
          width: "60%",
          height: "auto",
          position: "absolute",
          top: "21.8%",
          left: "24%",
        }}
      />
    </ComponentWrapper>
  );
};

export default VideoFrame;

const ComponentWrapper = styled(Box)((props) => ({
  position: "relative",
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  pr: "unset",
}));
