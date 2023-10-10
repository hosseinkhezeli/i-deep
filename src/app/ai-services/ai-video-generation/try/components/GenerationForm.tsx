"use client";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import theme from "@/theme/theme";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const GenerationForm = () => {
  const router = useRouter();
  const [contexts, setContexts] = useState("0");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContexts((event.target as HTMLInputElement).value);
  };

  
  const activeContext = {
    background:theme.palette.primary.main,
    ".MuiTypography-root": {
      color: "#fff !important",
    },
  };
  const diActiveContext = {
    backgroundColor: theme.palette.mode === "dark" ? `${theme.palette.background.paper} !important`:`${theme.palette.background.default} !important`,
    border: `0.5px solid ${theme.palette.secondary.main}`,
    ".MuiTypography-root": {
      color:`${theme.palette.text.primary} !important`,
        },
  };
  
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={6}
        px={4}
        maxWidth={{ xs: "auto", md: 500 }}
        alignItems={{ xs: "center", md: "flex-start" }}
        >
        <Typography
          variant="h5"
          fontSize={"20px"}
          textAlign={{ xs: "center", md: "left" }}
          >
          Try It Yourself
        </Typography>
        <Typography
          variant="h2"
          fontSize={{ xs: 40, md: 50 }}
          textAlign={{ xs: "center", md: "left" }}
          maxWidth={350}
          >
          Create a free AI video
        </Typography>
        <Typography
          variant="body2"
          fontSize={"20px"}
          textAlign={{ xs: "center", md: "left" }}
          >
          Select a template & edit your script.
        </Typography>
        <Typography
          variant="h5"
          fontSize={"22px"}
          textAlign={{ xs: "center", md: "left" }}
          >
          Select Video Template
        </Typography>
        <FormControl sx={{ maxWidth: "500px" }}>
          <RadioGroup
            sx={{ gap: 1, justifyContent: { xs: "center", md: "flex-start" } }}
            row
            value={contexts}
            onChange={handleChange}
            >
            {radioGroupLabel.map((label: string, index: number) => (
              <TheLabel
                value={`${index}`}
                sx={contexts == `${index}` ? activeContext : diActiveContext}
                control={<Radio sx={{ display: "none" }} />}
                label={label}
                />
            ))}
          </RadioGroup>
        </FormControl>
        <Typography
          variant="h5"
          fontSize={"20px"}
          textAlign={{ xs: "center", md: "left" }}
          >
          Edit your video script in any language
        </Typography>
        <TextField
        variant="outlined"
          multiline
          rows={3}
          placeholder="Your script"
          sx={{ width: "100%", maxWidth: "400px", }}
        />
        <Button
          variant="contained"
          onClick={() => router.push("?dataSubmitted=true")}
          sx={{ width: "100%", maxWidth: "400px" }}
          >
          Continue
        </Button>
      </Box>
    </>
  );
};

export default GenerationForm;

const radioGroupLabel = [
  "iDeep Demo 1",
  "iDeep Demo 2",
  "iDeep Demo 3",
];

const TheLabel = styled(FormControlLabel)(({ theme }) => ({
  ".MuiTypography-root": {
    fontWeight: "400",
    fontSize: "16px",
  },
  borderRadius: "10px",
  margin: "0px",
  display: "flex",
  padding: "5px 15px",
  justifyContent: "center",
  alignItems: "center",
}));