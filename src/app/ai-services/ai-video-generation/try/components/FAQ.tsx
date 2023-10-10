import BasicAccordion from "@/app/components/accordion/BasicAccordion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const FAQ = () => {
  return (
    <>
      <Box maxWidth={1536} mx="auto" my={"10rem"}>
        <Typography
          variant="h2"
          fontSize={{ xs: "24px", md: "48px" }}
          textAlign={"center"}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "14px", md: "20px" },
            maxWidth: { xs: "300px", md: "unset" },
            textAlign: { xs: "center" },
            margin: { xs: "40px", md: "70px" },
          }}
        >
          If you don't see what's on your mind, reach out to us anytime.
        </Typography>
        <BasicAccordion data={accordionData} />
      </Box>
    </>
  );
};

export default FAQ;
const accordionData = [
  {
    title: 'What AI services do you offer, including "Text to Video"?',
    description:
      'Our AI services encompass a range of capabilities, including "Text to Video," chatbot development, lead generation, annotation, moderation, and more, providing versatile solutions for various needs.',
  },
  {
    title:
      'What makes "Text to Video" unique, and where can it be most beneficial?',
    description:
      '"Text to Video" stands out as a tool that effortlessly transforms text into engaging avatar videos. It excels in simplifying complex ideas, enhancing audience engagement, and is invaluable in marketing campaigns, e-learning, product presentations, and beyond.',
  },
  {
    title:
      'How can I leverage "Text to Video" to solve specific challenges in my projects?',
    description:
      '"Text to Video" is the answer to several challenges, offering a solution for clear communication, saving time in content creation, and delivering compelling visuals. You can implement it on websites, social media, educational platforms, and marketing materials.',
  },
  {
    title: 'How does the customization option work for "Text to Video"?',
    description:
      'Customization is at your fingertips with our premium service. Tailor the appearance, voice, style, and even integrate branding elements to align "Text to Video" precisely with your unique needs. Contact us to discuss your customization requirements.',
  },
  {
    title:
      'What sets your AI services, including "Text to Video," apart from the competition?',
    description:
      'Our AI services are designed with flexibility and quality in mind. "Text to Video" offers an exceptional blend of simplicity, versatility, and customization, ensuring it meets the demands of diverse projects and objectives.',
  },
];
