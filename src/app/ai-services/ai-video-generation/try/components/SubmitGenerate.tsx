"use client"
import { lightPalette } from "@/theme/components/palette/light/lightPalette";
import theme from "@/theme/theme";
import { Checkbox, FormControlLabel, InputLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
interface ISubmitForm {
  name: string;
  email: string;
  confirm: boolean;
}

const SubmitGenerate = () => {
  const onSubmit: SubmitHandler<ISubmitForm> = (data) => {
    console.log(data);
  };
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      confirm: false,
    },
  });
  const router = useRouter()
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={8}
        maxWidth={{ xs: "auto", md: 600 }}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <Typography
          variant="h2"
          fontSize={{ xs: 40, md: 50 }}
          textAlign={{ xs: "center", md: "left" }}
          maxWidth={700}
        >
          You’ll get your video via email in minutes.
        </Typography>
        <Typography
          variant="h5"
          fontSize={"20px"}
          textAlign={{ xs: "center", md: "left" }}
        >
          Please note: political, sexual, criminal and discriminatory content
          will not be tolerated or approved.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex",flexDirection:"column",gap:20}}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                label={"Your name"}
                sx={{ width: "100%", maxWidth: "400px" }}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                label={"Email"}
                sx={{ width: "100%", maxWidth: "400px" }}
                {...field}
              />
            )}
          />
          <Controller
            name="confirm"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox />}
                label="I confirm that i have read and understand the terms of service and privacy policy"
                {...field}
              />
            )}
          />
          <Box display={"flex"} sx={{ width: "100%", maxWidth: "400px" }} gap={4}>
          <Button onClick={router.back} sx={{flexBasis:"50%",bgcolor:lightPalette.primary[20],color:lightPalette.primary.main,borderColor:lightPalette.primary.main,":hover":{color:lightPalette.secondary.back}}}>
            Go Back
          </Button>
          <Button type="submit" sx={{flexBasis:"50%"}}>
            Generate your video
          </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default SubmitGenerate;
