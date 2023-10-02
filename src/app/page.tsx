import { Metadata } from "next/types";
import MainCarousel from "./components/main-carousel";
import OurProjectJourney from "./components/our-project-journey";
export const metadata: Metadata = {
  title: 'iDeep_Home',
  description:
    'Home page of iDeep website',
};


export default function HomePage() {
  return (
    <>
      <MainCarousel />
      <OurProjectJourney/>
    </>
  );
}
