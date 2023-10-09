import React from "react";
import Image from "next/image";
import VideoBGImage from "@public/images/video_bg.png";
import Box from "@mui/material/Box";
const VideoFrame = () => {
  return (
    <Box position={"relative"} width={"100%"} height={"auto"} display={"flex"} justifyContent={{xs:"center"}} pr={{xs:"unset"}}>
      <Image
        src={VideoBGImage}
        alt="Ai video generate panel"
        style={{ width: "100%", height: "auto",borderRadius:10  }}
      />
      <video  muted autoPlay={true} src="/videos/transparentAvatar.webm" loop style={{ width: "60%", height: "auto",position:"absolute",top:"21.8%",left:"24%" }}/>


    </Box>
  );
};

export default VideoFrame;
