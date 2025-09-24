import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-foreground lg:text-2xl">Welcome to AccRuvia</p>
              <h1 className="text-1xl lg:text-5xl font-bold">
                Your Trusted Partner for
                <br />
                all your <span className="text-primary leading-normal">Accounting &</span>
                <br />
                <span className="text-primary">Recruitment Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our vision is to set Itself as benchmark in Accounting and<br /> Outsourcing industry. We help our clients to achieve their business <br />objectives by providing innovative, Best in class Consulting services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="brand-red" size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
              <Button size="lg" className="text-lg px-8 py-6 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-colors duration-300">                
              Explore Our Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroIllustration}
              alt="AccRuvia - Professional accounting and recruitment services"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
