import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import AboutPreview from "../components/AboutPreview";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <AboutPreview />
      <Services />
       
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
     
    </MainLayout>
  );
}

export default Home;