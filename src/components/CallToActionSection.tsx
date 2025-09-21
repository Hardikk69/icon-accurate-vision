import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="text-white">
              <p className="text-xl mb-4 opacity-90">We are here to support you in every step.</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Let's schedule a quick call.
              </h2>
            </div>
            <Button 
              variant="outline-white" 
              size="lg" 
              className="text-lg px-8 py-6"
            >
              Contact Us Today
            </Button>
          </div>

          {/* Laptop Image */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-full h-64 bg-white/20 rounded-xl flex items-center justify-center">
                <div className="text-white/60 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm">Schedule Your Consultation</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;