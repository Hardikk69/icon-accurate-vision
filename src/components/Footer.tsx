import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-2xl font-bold">AccRuvia</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              We are here to support you in every step of your accounting and recruitment journey.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="accent">
                Contact Us Today
              </Button>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Important Links</h3>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#services" className="block text-white/80 hover:text-white transition-colors">Services</a>
              <a href="#about" className="block text-white/80 hover:text-white transition-colors">About Us</a>
              <a href="#team" className="block text-white/80 hover:text-white transition-colors">Our Team</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Services</h3>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Accounting</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Bookkeeping</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Payroll Services</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Tax Services</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Administrative Support</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Audit Support</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Recruitment</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Contract Staffing</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Executive Search</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Outsourcing Services</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <span className="text-white/80">+91 9374437099</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <span className="text-white/80">accruvia@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <span className="text-white/80">Professional Services Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 AccRuvia. All rights reserved. | Professional Accounting & Recruitment Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;