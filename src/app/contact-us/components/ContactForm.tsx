"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IContactForm {
  name: string;
  email: string;
  country: string;
  InquiryType: string;
  message: string;
  personalized_ad:boolean
}

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
    <Box
      maxWidth={540}
      bgcolor={"white"}
      px={{xs:5,md:9}}
      py={12}
      borderRadius={"20px"}
      boxShadow={"0px 16px 48px 0px rgba(0,0,0,0.176)"}
    >
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
                // maxRows={4}
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
    </Box>
  );
};

export default ContactForm;
