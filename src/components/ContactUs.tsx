import { Mail, Phone, MapPin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.jpg";

const ContactUs = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/*Hero*/}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6 text-center sm:text-left">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground">
                  Any other Hero Content
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                  <span className="text-primary">Free Consultation  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  We’d love to hear from you, so why not contact us to find out how we can work together to build or strengthen your our business. Drop by for a coffee and enjoy our art filled foyer.
                </p>
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

      <section className="max-w-[86rem] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#0F172A]">
              Keep In Touch With Our <br /> Professional Team
            </h2>
            <p className="text-gray-600 text-lg">
              Connect with us to receive personalized support and reliable
              solutions for all your accounting and taxation needs.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-[#0F172A]">Head Office</h3>
                <p className="text-gray-700">Suite 3, 1330 Ferntree, Gully Road Scoresby, VIC 3179</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#0F172A]">Location</h3>
                <p className="text-gray-700">Melbourne, Victoria, Australia</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#D14012]" />
                <p className="text-gray-700">info@accruvia.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#D14012]" />
                <p className="text-gray-700">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-50 shadow-md rounded-2xl p-8">
            <p className="text-gray-700 mb-6">
              We’d love to hear from you! Please fill out the form and we’ll get
              back to you as soon as possible.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium">First Name *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F172A] outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Last Name *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F172A] outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email *</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F172A] outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F172A] outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium">Mobile Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F172A] outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium">Message *</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0F172A] outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#D14012] text-white py-3 rounded-xl font-semibold hover:bg-[#b8360f] transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
