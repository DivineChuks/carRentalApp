import CarList from "@/components/CarList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import OurTeam from "@/components/OurTeam";
import Showcase from "@/components/Showcase";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <CarList />
      <WhyChooseUs />
      <OurTeam />
      <Showcase />
      <Newsletter />
      <Footer />
    </>
  );
}
