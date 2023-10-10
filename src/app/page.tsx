import { Metadata } from "next/types";
import MainCarousel from "./components/main-carousel/main-carousel";
import OurProjectJourney from "./components/our-project-journey";
import GetAiServices from "./components/get-ai-services";
import Support from "./components/support";
import FAQ from "./components/FAQ/faq";
import StayInTheKnow from "./components/stay-in-the-know";
import Projects from "./components/projects";
export const metadata: Metadata = {
  title: "iDeep_Home",
  description: "Home page of iDeep website",
};

export default function HomePage() {
  return (
    <div style={{overflowX:"hidden",paddingTop:"2rem"}}>
      <MainCarousel />
      <OurProjectJourney />
      <Projects/>
      <GetAiServices/>
      <Support/>
      <FAQ/>
      <StayInTheKnow/>
    </div>
  );
}
