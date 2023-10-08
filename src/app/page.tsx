import { Metadata } from "next/types";
import MainCarousel from "./components/main-carousel/main-carousel";
import OurProjectJourney from "./components/our-project-journey";
import ProjectDisplay from "./components/projectsDisplay";
import MAMProjectMockup from "@public/images/Azki_Gtex-6c473a64.webp";
import CarBazaarProjectMockup from"@public/images/Carbazaar-7c0e57f8.webp"
import GetAiServices from "./components/get-ai-services";
import Support from "./components/support";
import FAQ from "./components/FAQ/faq";
import StayInTheKnow from "./components/stay-in-the-know";
export const metadata: Metadata = {
  title: "iDeep_Home",
  description: "Home page of iDeep website",
};

export default function HomePage() {
  return (
    <div style={{overflowX:"hidden",paddingTop:"2rem"}}>
      <MainCarousel />
      <OurProjectJourney />
      <ProjectDisplay
        title="Media Asset Management Project"
        description="Transform Your Media Work flow: Harness the power of our AI-driven Media Asset Management (MAM) platform to elevate content quality, streamline distribution, and optimize operations. With AI automation, personalized interactions, and advanced analytics, you'll lead the way in media management. Embrace the future of AI technology with our cutting-edge MAM platform."
        image={MAMProjectMockup}
      />
            <ProjectDisplay
        title="Azki Project"
        description="Introducing our revolutionary insurance platform! The insurance industry is evolving rapidly, and our cutting-edge B2B2C solution leverages AI to simplify the process. Say goodbye to traditional complexities; our platform streamlines sales, increases efficiency, and offers scalability. Join us in revolutionizing insurance sales with AI-driven solutions – your key to growth and profitability."
        image={MAMProjectMockup}
      />
                  <ProjectDisplay
        title="CarBazaar"
        description="Supercharge your sales journey with our dealership platform! Our advanced AI simplifies vehicle sourcing, saving valuable time and resources. Picture having instant access to real-time market data, in-depth vehicle insights, and personalized recommendations, revolutionizing your car dealership experience. Our platform empowers efficient buying, streamlines processes, and enhances customer satisfaction."
        image={CarBazaarProjectMockup}
      />
      <GetAiServices/>
      <Support/>
      <FAQ/>
      <StayInTheKnow/>
    </div>
  );
}
