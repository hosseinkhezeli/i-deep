"use client";
//react
import React from "react";
//next
import { useRouter } from "next/navigation";
//hook
import { Controller, SubmitHandler, useForm } from "react-hook-form";
//mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Checkbox, FormControlLabel } from "@mui/material";
import styled from "@mui/material/styles/styled"
//type
interface ISubmitForm {
  name: string;
  email: string;
  confirm: boolean;
}

const SubmitGenerate = () => {
  const router = useRouter();

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

  return (
    <>
      <ComponentWrapper>
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                autoComplete="off"
                variant="filled"
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
                variant="filled"
                autoComplete="off"
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
          <Box
            display={"flex"}
            sx={{ width: "100%", maxWidth: "400px" }}
            gap={4}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={router.back}
              sx={{ flexBasis: "50%" }}
            >
              Go Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ flexBasis: "50%" }}
            >
              Generate your video
            </Button>
          </Box>
        </form>
      </ComponentWrapper>
    </>
  );
};

export default SubmitGenerate;

const ComponentWrapper = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  maxWidth: "auto",
  padding: "0px 16px",
  alignItems: "center",
  [props.theme.breakpoints.up("md")]: {
    maxWidth: 500,
    alignItems: "flex-start",
  },
}));
