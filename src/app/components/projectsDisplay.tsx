import { Box, Button, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
};
const ProjectDisplay = ({ title, description, image }: Props) => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        maxWidth={1536}
        mx={"auto"}
        px={4}
        width={"max-content"}
        gap={10}
        my={30}
      >
        <Typography
          display={"inline-block"}
          variant="h2"
          fontSize={{ xs: "24px", md: "48px" }}
          textAlign={"center"}
          maxWidth={{xs:"90vw"}}
          width={{ xs: "fit-content", xl: "max-content" }}
          my={"1rem"}
        >
          {title}
        </Typography>
        <Typography
          textAlign={"center"}
          variant="h5"
          fontWeight={500}
          maxWidth={{xs:"80vw",lg:"940px"}}
          width={{ xs: "fit-content", xl: "max-content" }}
          mt={"1rem"}
        >
          {description}
        </Typography>
        <Box width={"max-content"}>
          <Image
            src={image}
            alt="Project mockup"
            sizes="(min-width: 808px) 80vw, 80vw"
            quality={90}
            style={{
              width: "75vw",
              height: "max-content",
            }}
          />
        </Box>
        <Button
          sx={{
            px: { xs: 10, lg: 25 },
            py: "1rem",
            fontSize: { xs: 14, lg: 18 },
          }}
        >
          View Project !
        </Button>
      </Box>
    </>
  );
};

export default ProjectDisplay;
