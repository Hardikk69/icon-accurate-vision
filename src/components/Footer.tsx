import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="relative bg-[#D14012]/10 text-white rounded-t-2xl max-w-[85rem] mx-auto p-8 overflow-hidden">
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} />
            </div>
            <p className="text-[#D14012] lg:text-lg leading-relaxed">
              We are here to support you in every step of your accounting journey.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" className="bg-[#56b1b3]">
                Contact Us Today
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg text-secondary font-bold">Important Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Home</a>
              <a href="#services" className="block text-[#D14012] hover:text-secondary transition-colors">Services</a>
              <a href="#about" className="block text-[#D14012] hover:text-secondary transition-colors">About Us</a>
              <a href="#team" className="block text-[#D14012] hover:text-secondary transition-colors">Our Team</a>
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Privacy Policy</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg text-secondary font-bold">Services</h3>
            <div className="space-y-2">
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Accounting &<br />Bookkeeping</a>
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Payroll Services</a>
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Tax Services</a>
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Administrative Support</a>
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Audit Support</a>
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Oursourcing Services</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg text-secondary font-bold">Hiring</h3>
            <div className="space-y-2">
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">EOR-Employee on Record</a>
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Permenent Hiring</a>
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Contract Staffing</a>
              <a href="#" className="block text-[#D14012] hover:text-secondary transition-colors">Executive Search<br />(CXOs)</a>
            </div>
          </div>

          <div className="space-y-4 mb-5">
            <h3 className="text-lg text-secondary font-bold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <span className="text-[#D14012] hover:text-secondary">+91 9374437099</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <span className="text-[#D14012] hover:text-secondary">accruvia@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <span className="text-[#D14012] hover:text-secondary">Professional Services Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright above curve */}
      </div>

      {/* Red arc background */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-16 mt-6 pt-5 pb-5 bg-[#D14012] rounded-t-[50%] sm:rounded-t-[100%] z-2">
        <p className="text-white text-sm sm:text-lg text-center px-4">
          © 2024 AccRuvia. All rights reserved. | Professional Accounting & Recruitment Solutions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
