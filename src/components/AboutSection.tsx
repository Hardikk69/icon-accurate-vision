import aboutIllustration from "@/assets/about-illustration.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="relative order-2 lg:order-1">
            <img
              src={aboutIllustration}
              alt="About AccRuvia - Professional team collaboration"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <p className="text-muted-foreground text-lg mb-4">Learn More</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-primary">Us</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At AccRuvia, established in Mazon 2016, is a rare blend 
                specializing firm excelling business with comprehensive 
                accounting solutions and expert recruitment services 
                (FTE's, Contracts, and EOR) with a decade of proven 
                experience.
              </p>

              <p>
                AccRuvia offers specialized consultancy services, professional 
                recruiting, payroll processing, and a comprehensive range 
                of on-demand solutions to help businesses streamline their 
                operations and achieve sustainable growth.
              </p>

              <p>
                As seasoned associates, we focus on transforming our clients' 
                profitability by delivering advanced value guidance. Over 
                our years of experience, we have developed the internal 
                capabilities to help you focus onward, steady, and improving 
                financial scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;