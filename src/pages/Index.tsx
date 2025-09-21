import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import AboutSection from "@/components/AboutSection";
import SoftwareSection from "@/components/SoftwareSection";
import TeamSection from "@/components/TeamSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <RecruitmentSection />
        <AboutSection />
        <SoftwareSection />
        <TeamSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
