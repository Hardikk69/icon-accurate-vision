import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full flex justify-center">
        <div className="bg-gradient-to-r from-[#ed2f0d] to-[#3b1d16] text-white py-3 px-4 sm:py-4 sm:px-6 rounded-b-2xl max-w-[86rem] w-full">
          <div className="container mx-auto flex justify-start items-center text-xs sm:text-sm md:text-base lg:text-2xl gap-6 sm:gap-10 flex-wrap">
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span>+91 9374437099</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span>accruvia@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="pt-6 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-[240px] h-8 flex items-center justify-center">
                  <img src={logo}></img>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <HashLink smooth to="/#top" className="text-foreground hover:text-primary font-medium transition-colors hover:underline hover:decoration-primary underline-offset-4">
                Home
              </HashLink>
              <HashLink smooth to="/#services" className="text-foreground hover:text-primary font-medium transition-colors hover:underline hover:decoration-primary underline-offset-4">
                Services
              </HashLink>
              <HashLink smooth to="/#about" className="text-foreground hover:text-primary font-medium transition-colors hover:underline hover:decoration-primary underline-offset-4">
                About Us
              </HashLink>
              <HashLink smooth to="/#team" className="text-foreground hover:text-primary font-medium transition-colors hover:underline hover:decoration-primary underline-offset-4">
                Our Team
              </HashLink>
              <Button
                variant="accent"
                size="sm"
                className="bg-[#56b1b3]"
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;