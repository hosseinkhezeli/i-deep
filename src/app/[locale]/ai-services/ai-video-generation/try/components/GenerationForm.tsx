"use client";
//react
import React, { useState } from "react";
//next
import { useRouter } from "next/navigation";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled, useTheme } from "@mui/material/styles";


const GenerationForm = () => {
  //hooks
  const router = useRouter();
  const [contexts, setContexts] = useState("0");
  const theme = useTheme()
  //function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContexts((event.target as HTMLInputElement).value);
  };

//component
const TheLabel = styled(FormControlLabel)(() => ({
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

const ComponentWrapper = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: "0px 16px",
  maxWidth: "auto",
  alignItems: "center",
  [props.theme.breakpoints.up("md")]: {
    maxWidth: 500,
    alignItems: "flex-start",
  },
}));

//style classes
const activeContext = {
  background: theme.palette.primary.main,
  ".MuiTypography-root": {
    color: "#fff !important",
  },
};
const diActiveContext = {
  backgroundColor:
    theme.palette.mode === "dark"
      ? `${theme.palette.background.paper} !important`
      : `${theme.palette.background.default} !important`,
  border: `0.5px solid ${theme.palette.secondary.main}`,
  ".MuiTypography-root": {
    color: `${theme.palette.text.primary} !important`,
  },
};

  return (
    <>
      <ComponentWrapper>
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
        <FormControl>
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
          sx={{ width: "100%" }}
        />
        <Button
          variant="contained"
          onClick={() => router.push("?dataSubmitted=true")}
          sx={{ width: "100%" }}
        >
          Continue
        </Button>
      </ComponentWrapper>
    </>
  );
};

export default GenerationForm;
//data & initial values
const radioGroupLabel = ["iDeep Demo 1", "iDeep Demo 2", "iDeep Demo 3"];
