"use client"
import React, { useState } from "react";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

type AccordionDataType ={
  title:string,
  description:string
}
type Props ={
  data:any
}

const BasicAccordion = ({data}:Props) => {

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Box width={"95vw"} maxWidth={1536} mx={"auto"}>
        {data.map((item: AccordionDataType, index: number) => (
          <Accordion
          key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              marginBottom: "10px",
              border: "none",
              borderBottom: `1px solid #32313061`,
              ":before":{backgroundColor: "transparent",}
            }}
          >
            <AccordionSummary
              expandIcon={expanded === `panel${index}` ? "-" : "+"}
              sx={{ margin: { xs: "0 10px", md: "0 25px" }, fontSize: "25px" }}
            >
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "14px", md: "20px" },
                    fontWeight: 700,
                    lineHeight: { xs: "25px", md: "60px" },
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: { xs: "0 20px 10px 20px", md: "0 40px 28px 40px" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "gray.main",
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 400,
                }}
              >
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
};

export default BasicAccordion;
