"use client";
//react
import React from "react";
//mui
import theme from "@/theme/theme";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  PaletteMode,
  Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import styled from "@mui/material/styles/styled"
//react hook form
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { getState } from "@/context/store";
//types
interface IContactForm {
  name: string;
  email: string;
  country: string;
  InquiryType: string;
  message: string;
  personalized_ad:boolean
}

const activeTheme:PaletteMode = getState().layoutTheme.layoutTheme
const ContactForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      country: "",
      InquiryType: "",
      message: "",
      personalized_ad:false
    },
  });

  const onSubmit: SubmitHandler<IContactForm> = (data) => {
    console.log(data);
  };
  return (
    <ComponentWrapper>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: 30 }}
      >
        <Box>
          <InputLabel>
            Your Name<span style={{ color: "red" }}>*</span>
          </InputLabel>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField sx={{ width: "100%" }} {...field} autoComplete="off"/>
            )}
          />
        </Box>
        <Box>
          <InputLabel>
            Email<span style={{ color: "red" }}>*</span>
          </InputLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField sx={{ width: "100%" }} {...field} autoComplete="off" />
            )}
          />
        </Box>
        <Box>
          <InputLabel>
            Country<span style={{ color: "red" }}>*</span>
          </InputLabel>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select variant="outlined" sx={{ width: "100%" }} {...field}>
                <MenuItem value={"iran"}>Iran</MenuItem>
                <MenuItem value={"germany"}>Germany</MenuItem>
                <MenuItem value={"turkey"}>Turkey</MenuItem>
                <MenuItem value={"qatar"}>Qatar</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box>
          <InputLabel>
            Inquiry type<span style={{ color: "red" }}>*</span>
          </InputLabel>
          <Controller
            name="InquiryType"
            control={control}
            render={({ field }) => (
              <Select sx={{ width: "100%" }} {...field}>
                <MenuItem value={"general_business"}>General business</MenuItem>
                <MenuItem value={"product_info"}>Product info</MenuItem>
                <MenuItem value={"partnership"}>Partnership</MenuItem>
                <MenuItem value={"careers"}>Careers</MenuItem>
                <MenuItem value={"other"}>other</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box>
          <InputLabel>Message</InputLabel>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ width: "100%" }}
                multiline
                rows={3}
                {...field}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            name="personalized_ad"
            control={control}
            render={({ field }) => (
              <FormControlLabel
              sx={{color:`${theme(activeTheme).palette.primary.main}`}}
                control={<Checkbox />}
                label="Yes, I agree to recieve periodic communication, emails and promotional materials from iDeep related to services and can unsubscribe at any time."
                {...field}
              />
            )}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" sx={{ width: "100%" }}>
          Send
        </Button>
      </form>
    </ComponentWrapper>
  );
};

export default ContactForm;

const ComponentWrapper = styled(Box)((props)=>({
  maxWidth:540,
  backgroundColor:theme(activeTheme).palette.mode==="light"?theme(activeTheme).palette.background.default:theme(activeTheme).palette.secondary.main,
  padding:"48px 20px",
  borderRadius:theme(activeTheme).shape.borderRadius,
  boxShadow:`0px 16px 48px 0px ${theme(activeTheme).palette.mode==="light"?theme(activeTheme).palette.secondary.light:theme(activeTheme).palette.primary.light}` ,
  [props.theme.breakpoints.up("md")]:{
    padding:"48px 36px"
  }
}))