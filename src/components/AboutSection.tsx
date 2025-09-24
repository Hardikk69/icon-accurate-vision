import { useRef, useState, useEffect } from "react";
import aboutIllustration from "@/assets/about-illustration.jpg";

const AboutSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    function updateHeight() {
      if (contentRef.current) {
        const height = contentRef.current.getBoundingClientRect().height;
        setContentHeight(height);
      }
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Illustration */}
          <div
            className="relative order-2 lg:order-1 w-full lg:w-1/2"
            style={{ height: contentHeight ? `${contentHeight}px` : "auto" }}
          >
            <img
              src={aboutIllustration}
              alt="About AccRuvia - Professional team collaboration"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8"
          >
            <div className="text-center lg:text-left">
              <p className="text-foreground text-lg mb-4">Our information</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-primary">Us</span>
              </h2>
            </div>

            <div className="space-y-6 text-[20px] leading-relaxed">
              <p>
                LN Associate, established in March 2016, is a one-stop consultancy firm assisting businesses with customized solutions to achieve their unique goals. We provide independent assessments of operations and structures while offering services in Accounting, Audit, Tax Advisory, Payroll Processing, and Allied Services to both Indian and international clients.
              </p>
              <p>
                As trusted advisors, we focus on transforming visions into reality by delivering value-driven guidance. Our professionals stay updated with the latest changes to help clients make smart, timely, and impactful financial decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;