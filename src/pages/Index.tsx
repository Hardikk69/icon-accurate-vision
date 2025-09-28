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
        <section id="top">
          <HeroSection />
        </section>
        <section>
          <StatsSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section>
          <RecruitmentSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section>
          <SoftwareSection />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section>
          <CallToActionSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
