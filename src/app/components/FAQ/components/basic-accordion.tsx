"use client"
import React, { useState } from "react";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { lightPalette } from "@/theme/components/palette/light/lightPalette";

type AccordionDataType ={
  title:string,
  description:string
}

const BasicAccordion = () => {

  const accordionData = [
    {
      title: "What is AI?",
      description:
        "AI, or Artificial Intelligence, refers to computer systems and programs designed to perform tasks that typically require human intelligence. These tasks include learning from data, making decisions, solving problems, and understanding and processing natural language. In essence, AI enables machines to mimic human-like thinking and decision-making.",
    },
    {
      title: "Why do we need AI?",
      description:
        "AI is essential because it enhances productivity, enables data-driven decisions, and personalizes customer experiences, ultimately helping our business thrive in a competitive landscape.",
    },
    {
      title: "What are AI services?",
      description:
        "AI services refer to a range of solutions and tools that leverage Artificial Intelligence to perform tasks such as data analysis, automation, personalization, and more. These services can help businesses streamline operations, make informed decisions, and provide better experiences to customers.",
    },
    {
      title: "What is OCR, and how can it benefit my business?",
      description:
        "OCR, or Optical Character Recognition, is a technology that converts printed or handwritten text into digital text that can be edited and searched. It benefits your business by automating data entry, improving document searchability, and reducing errors in tasks involving text recognition.",
    },
    {
      title:
        "What does your company specialize in, and how does AI play a role in your offering?",
      description:
        "We specialize in leveraging AI to create innovative solutions across various industries, making process smarter and more efficient.",
    },
    {
      title:
        "How can AI benefit my business, regardless of the industry I operate in?",
      description:
        "AI can improve operations, customer experience, and decision making in a wide range of industries, delivering tangible advantages",
    },
    {
      title:
        "Provide examples of how AI is transforming businesses in today’s world?",
      description:
        "AI is revolutionizing industries such as healthcare, finance, retail, and more, enhancing productivity and insights",
    },
    {
      title:
        "How do your AI solutions adapt to individual customer needs and preferences? ",
      description:
        "Our AI system use advanced algorithms to understand and cater to the unique needs of each customer, delivering personalized experiences.",
    },
    {
      title: "Why should we choose your company for AI services?",
      description:
        "We have a proven track record of delivering impactful AI solutions with a customer centric approach, setting us apart from industry.",
    },
  ];
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Box width={"95vw"} maxWidth={1536} mx={"auto"}>
        {accordionData.map((item: AccordionDataType, index: number) => (
          <Accordion
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
