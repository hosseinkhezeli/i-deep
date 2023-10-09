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
  const router = useRouter()
  const [contexts, setContexts] = useState("0");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContexts((event.target as HTMLInputElement).value);
  };

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

  const activeContext = {
    background:
      theme.palette.mode === "dark" ? "#274c84" : theme.palette.secondary.main,
    ".MuiTypography-root": {
      color: "#fff !important",
    },
  };
  const diActiveContext = {
    backgroundColor: theme.palette.mode === "dark" ? "#403F4C" : "#fff",
    border: "0.5px solid #8E8D8D",
    ".MuiTypography-root": {
      color:
        theme.palette.mode === "dark"
          ? "#e0e0e0 !important"
          : `${theme.palette.grey[700]} !important`,
    },
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={6}
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
            <TheLabel
              value="0"
              sx={contexts == "0" ? activeContext : diActiveContext}
              control={<Radio sx={{ display: "none" }} />}
              label="Synthesia Demo"
            />
            <TheLabel
              value="1"
              sx={contexts == "1" ? activeContext : diActiveContext}
              control={<Radio sx={{ display: "none" }} />}
              label="AI Consultation"
            />
            <TheLabel
              value="2"
              sx={contexts == "2" ? activeContext : diActiveContext}
              control={<Radio sx={{ display: "none" }} />}
              label="Sales Pitch"
            />
            <TheLabel
              value="3"
              sx={contexts == "3" ? activeContext : diActiveContext}
              control={<Radio sx={{ display: "none" }} />}
              label="iDeep Demo"
            />
            <TheLabel
              value="4"
              sx={contexts == "4" ? activeContext : diActiveContext}
              control={<Radio sx={{ display: "none" }} />}
              label="Compliment"
            />
            <TheLabel
              value="5"
              sx={contexts == "5" ? activeContext : diActiveContext}
              control={<Radio sx={{ display: "none" }} />}
              label="AI Consultation"
            />
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
          multiline
          rows={2}
          placeholder="Your script"
          sx={{ width: "100%", maxWidth: "400px" }}
        />
        <Button onClick={()=>router.push("?dataSubmitted=true")} sx={{ width: "100%", maxWidth: "400px" }}>Continue</Button>
      </Box>
    </>
  );
};

export default GenerationForm;
