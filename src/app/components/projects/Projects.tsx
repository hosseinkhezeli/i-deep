//react
import React from "react";
//component
import ProjectDisplay from "./components/ProjectDisplay";
//image
import MAMProjectMockup from "@public/images/Azki_Gtex-6c473a64.webp";
import CarBazaarProjectMockup from "@public/images/Carbazaar-7c0e57f8.webp";


const Projects = () => {
  return (
    <>
      {projectDisplayData.map((project: any, index: number) => (
        <ProjectDisplay
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </>
  );
};

export default Projects;

const projectDisplayData = [
  {
    title: "Media Asset Management Project",
    description:
      "Transform Your Media Work flow: Harness the power of our AI-driven Media Asset Management (MAM) platform to elevate content quality, streamline distribution, and optimize operations. With AI automation, personalized interactions, and advanced analytics, you'll lead the way in media management. Embrace the future of AI technology with our cutting-edge MAM platform.",
    image: MAMProjectMockup,
  },
  {
    title: "Azki Project",
    description:
      "Introducing our revolutionary insurance platform! The insurance industry is evolving rapidly, and our cutting-edge B2B2C solution leverages AI to simplify the process. Say goodbye to traditional complexities; our platform streamlines sales, increases efficiency, and offers scalability. Join us in revolutionizing insurance sales with AI-driven solutions – your key to growth and profitability.",
    image: MAMProjectMockup,
  },
  {
    title: "CarBazaar",
    description:
      "Supercharge your sales journey with our dealership platform! Our advanced AI simplifies vehicle sourcing, saving valuable time and resources. Picture having instant access to real-time market data, in-depth vehicle insights, and personalized recommendations, revolutionizing your car dealership experience. Our platform empowers efficient buying, streamlines processes, and enhances customer satisfaction.",
    image: CarBazaarProjectMockup,
  },
];
