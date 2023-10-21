"use client";
//next
import Image from "next/image";
//mui
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
//component
import VideoFrame from "./components/VideoFrame";
import GenerationForm from "./components/GenerationForm";
import FAQ from "./components/FAQ";
import SubmitGenerate from "./components/SubmitGenerate";
//image
import BGTexture from "@public/images/isolation.svg";
//type
type Props = {
  searchParams: {
    dataSubmitted: string;
  };
};

const TryTextToVideo = ({ searchParams: { dataSubmitted } }: Props) => {
  //components
  const ComponentWrapper = styled(Box)((props) => ({
    position: "relative",
    width: "100vw",
    overflow: "hidden",
    maxWidth: 1536,
    padding: "2rem 0.5rem",
    margin: "0px auto",
  }));
  const ContentWrapper = styled(Box)((props) => ({
    display: "grid",
    alignItems: "center",
    maxWidth: 1490,
    mx: "auto",
    p: 6,
    gap: 6,
    gridTemplateColumns: "1fr",
    [props.theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr 1fr",
    },
  }));

  return (
    <ComponentWrapper>
      <Image
        src={BGTexture}
        alt="background texture"
        style={{
          width: "100vw",
          height: "auto",
          maxWidth: "1000px",
          position: "absolute",
          transform: "rotate(54deg)",
          right: "-20%",
          zIndex: "-1",
        }}
      />
      <ContentWrapper sx={{ overflowX: "hidden" }}>
        {dataSubmitted !== "true" ? <GenerationForm /> : <SubmitGenerate />}
        <Box px={{ xs: 0, sm: 3, md: 6 }}>
          <VideoFrame />
        </Box>
      </ContentWrapper>
      <FAQ />
    </ComponentWrapper>
  );
};

export default TryTextToVideo;
