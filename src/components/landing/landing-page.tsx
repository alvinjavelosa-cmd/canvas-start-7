import { BackgroundFx, ScrollProgress } from "./effects";
import { useRevealOnScroll } from "./hooks";
import { Faq } from "./faq";
import { Pricing } from "./pricing";
import {
  AiCapabilities,
  Connected,
  FinalCta,
  Footer,
  Hero,
  HowItWorks,
  Nav,
  Problem,
  Testimonials,
  TrustStrip,
  Usage,
} from "./sections";

export function LandingPage() {
  useRevealOnScroll();

  return (
    <>
      <BackgroundFx />
      <ScrollProgress />
      <Nav />
      <Hero />
      <TrustStrip />
      <Problem />
      <AiCapabilities />
      <Connected />
      <Usage />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
