import Header from "@/components/campaign/Header";
import HeroSection from "@/components/campaign/HeroSection";
import VolunteerSection from "@/components/campaign/VolunteerSection";
import AboutSection from "@/components/campaign/AboutSection";
import CaucusBanner from "@/components/campaign/CaucusBanner";
import Footer from "@/components/campaign/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VolunteerSection />
        <AboutSection />
        <CaucusBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
