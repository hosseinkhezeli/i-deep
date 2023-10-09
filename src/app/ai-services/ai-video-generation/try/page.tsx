import Box from "@mui/material/Box";
import VideoFrame from "./components/VideoFrame";
import GenerationForm from "./components/GenerationForm";
import BGTexture from "@public/images/isolation.svg";
import Image from "next/image";
import FAQ from "./components/FAQ";
import SubmitGenerate from "./components/SubmitGenerate";
type Props = {
    searchParams:{
        dataSubmitted:string
    }
  };

const TryTextToVideo = ({searchParams:{dataSubmitted}}:Props) => {

  return (
    <Box
      position={"relative"}
      width={"100vw"}
      overflow={"hidden"}
      maxWidth={1536}
      py={"2rem"}
      px={"0.5rem"}
      mx={"auto"}
    >
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
      <Box
        display={"grid"}
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        alignItems={"center"}
        maxWidth={1490}
        mx={"auto"}
        p={6}
        gap={6}
        sx={{ overflowX: "hidden" }}
      >
        {dataSubmitted!=="true"?<GenerationForm />:<SubmitGenerate/>}
        <Box px={{ xs: 0, sm: 3, md: 6 }}>
          <VideoFrame />
        </Box>
      </Box>
      <FAQ/>
    </Box>
  );
};

export default TryTextToVideo;
