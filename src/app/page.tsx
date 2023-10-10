import { Metadata } from "next/types";
import MainCarousel from "./components/main-carousel/MainCarousel";
import OurProjectJourney from "./components/OurAiJourney";
import GetAiServices from "./components/GetAIService";
import Support from "./components/Support";
import FAQ from "./components/FAQ/FAQ";
import StayInTheKnow from "./components/StayInTheKnow";
import Projects from "./components/projects/Projects";
export const metadata: Metadata = {
  title: "iDeep_Home",
  description: "Home page of iDeep website",
};

export default function HomePage() {
  return (
    <div style={{overflowX:"hidden",paddingTop:"1rem"}}>
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
