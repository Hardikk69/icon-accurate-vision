import { useEffect, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Mail, Phone, Calculator, FileCheck, RefreshCw, Database, FileText, Settings,
  Clock, Users, Shield, Lock, Package, Brain, MapPin, Building
} from "lucide-react"
import heroImage from "@/assets/accountant-hero.png"
import Header from "./Header"
import Footer from "./Footer"

const HeroSection = () => (
  <section className="bg-hero-bg py-16 lg:py-24">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
            How can we help <br />
            <span className="text-primary">Bookkeepers &</span> <br />
            <span className="text-primary">Accountants</span>
          </h1>
          <p className="text-lg text-text-gray max-w-lg">
            We provide specialised support and solutions to enhance efficiency, accuracy, and growth for accountants and bookkeepers.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src={heroImage} alt="Professional accountant working with documents and calculator" className="max-w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  </section>
)

const ServicesGrid = () => {
  const services = [
    { icon: Calculator, title: "Monthly, Quarterly, and Annual Bookkeeping", description: "Delivering comprehensive bookkeeping services on a regular schedule.", color: "feature-purple" },
    { icon: FileCheck, title: "Account Corrections and Year-End Adjustments", description: "Reviewing and correcting books of account, and posting necessary year-end adjustments.", color: "feature-orange" },
    { icon: RefreshCw, title: "Control Account Reconciliation", description: "Ensuring accuracy by reconciling various control accounts.", color: "feature-purple" },
    { icon: Database, title: "Accounting Software Conversion", description: "Assisting with transitions to new accounting software and ensuring smooth conversions.", color: "feature-blue" },
    { icon: FileText, title: "Tax Return Preparation", description: "Preparing tax returns for forms 1120, 1120S, 1065, and related 1040s.", color: "feature-orange" },
    { icon: Settings, title: "System Implementation and Integration", description: "Supporting the implementation and integration of accounting systems to streamline operations.", color: "feature-purple" }
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group transition-all duration-300 border-2 border-gray-300 rounded-lg">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4 leading-tight">{service.title}</h3>
                  <p className="text-text-gray leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}

const DifferenceSection = () => {
  const features = [
    { icon: Clock, title: "Immediately Available", description: "Our team is ready to assist you at a moment's notice, ensuring your accounting needs are met promptly and efficiently." },
    { icon: Users, title: "Managed Accountants", description: "We provide managed accountants who are supervised by senior professionals, guaranteeing expert oversight." },
    { icon: Shield, title: "Turnover Protected", description: "We ensure continuity and stability in your accounting services to protect you from disruption." },
    { icon: Lock, title: "Software & Security", description: "We utilise advanced accounting software and robust security measures to keep your financial data safe." },
    { icon: Package, title: "All-Inclusive Engagement", description: "Comprehensive engagements that cover all your accounting needs." },
    { icon: Brain, title: "Accountant Mindset", description: "Precision, accuracy and strategic financial insights to support your business goals." }
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 3, spacing: 24, origin: "center" },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 1, spacing: 14, origin: "center" } },
      "(max-width: 1024px)": { slides: { perView: 2, spacing: 18, origin: "center" } }
    },
    created(s) {
      const slideData = s.track.details.slides
      const slideEls = containerRef.current?.querySelectorAll<HTMLDivElement>(".keen-slider__slide")
      if (!slideEls) return
      slideData.forEach((sd, i) => {
        const el = slideEls[i]
        if (!el) return
        el.style.transition = "transform 450ms cubic-bezier(.2,.9,.3,1), opacity 450ms ease, box-shadow 450ms ease"
      })
      const update = (ss: any) => {
        const data = ss.track.details.slides
        const els = containerRef.current?.querySelectorAll<HTMLDivElement>(".keen-slider__slide")
        if (!els) return
        data.forEach((d: any, idx: number) => {
          const el = els[idx]
          if (!el) return
          const portion = Math.max(0, Math.min(1, d.portion ?? 0))
          const scale = 0.85 + portion * 0.45
          const translateY = -18 * portion
          const opacity = 0.45 + portion * 0.55
          el.style.transform = `translateY(${translateY}px) scale(${scale})`
          el.style.opacity = `${opacity}`
          el.style.zIndex = `${Math.round(portion * 100)}`
          if (portion > 0.85) {
            el.classList.add("is-center")
          } else {
            el.classList.remove("is-center")
          }
        })
      }
      update(s)
      s.on("detailsChanged", update)
    }
  })

  useEffect(() => {
    const id = setInterval(() => instanceRef.current?.next(), 3500)
    return () => clearInterval(id)
  }, [instanceRef])

  const setBothRefs = (el: HTMLDivElement | null) => {
    sliderRef(el)
    containerRef.current = el
  }

  return (
    <section className="py-16 lg:py-24 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">The Boutique Accounts Difference</h2>
        </div>

        <div ref={setBothRefs} className="keen-slider overflow-visible">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="keen-slider__slide flex justify-center">
                <div className="w-full max-w-[380px]">
                  <Card className="border-2 border-gray-300 bg-white">
                    <div className="p-2">
                      <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                          <Icon className="w-10 h-10 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                        <p className="text-text-gray leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .keen-slider { padding: 20px 0; }
        .keen-slider__slide { will-change: transform, opacity; display: flex; justify-content: center; opacity: 0.6; transform: translateY(0) scale(0.9); }
        .keen-slider__slide .card { transition: border-color 300ms ease, box-shadow 300ms ease; }
        .keen-slider__slide.is-center { pointer-events: auto; }
        .keen-slider__slide.is-center .card { border-color: rgba(209,64,18,0.95); box-shadow: 0 18px 40px rgba(13, 20, 30, 0.12); background: rgba(209,64,18,0.04); }
        @media (min-width: 1024px) {
          .keen-slider__slide { margin: 0 6px; }
        }
        @media (max-width: 768px) {
          .keen-slider__slide { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  )
}

const ContactSection = () => (
  <section className="py-16 lg:py-24">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Left Side: Heading + Contact Info */}
        <div>
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Keep In Touch With Our Professional Team
            </h2>
            <p className="text-lg text-text-gray max-w-2xl">
              Connect with us to receive personalized support and reliable
              solutions for all your accounting and taxation needs.
            </p>
          </div>

          <div className="space-y-8">
            {[{ icon: Building, title: "Head Office", text: "Suite 3, 1330 Ferntree, Gully Road Scoresby, VIC 3179" },
              { icon: MapPin, title: "Location", text: "Melbourne, Victoria, Australia" },
              { icon: Mail, title: "Email Address", text: "info@boutiqueaccounts.com", link: "mailto:info@boutiqueaccounts.com" },
              { icon: Phone, title: "Telephone", text: "+61 422179150", link: "tel:+61422179150" }].map((item, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-sm text-accent hover:text-accent/80">{item.text}</a>
                      ) : (
                        <p className="text-sm text-text-gray">{item.text}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div>
          <Card className="border-2 border-gray-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h3>
              <p className="text-text-gray mb-8">
                We'd love to hear from you! Please fill out the form, and we'll
                get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter subject" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Phone Number</Label>
                  <div className="flex">
                    <Select>
                      <SelectTrigger className="w-24"><SelectValue placeholder="🇦🇺" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in">In +91</SelectItem>
                        <SelectItem value="du">Du +971</SelectItem>
                        <SelectItem value="us">US +1</SelectItem>
                        <SelectItem value="au">AU +61</SelectItem>
                        <SelectItem value="uk">GB +44</SelectItem>
                        <SelectItem value="ca">CA +1</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input id="phone" className="flex-1 ml-2" placeholder="Enter phone number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" rows={4} placeholder="Enter your message" />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  </section>
)

const ServicePage = () => (
  <div>
    <Header/>
    <HeroSection />
    <ServicesGrid />
    <DifferenceSection />
    <ContactSection />
    <Footer/>
  </div>
)

export default ServicePage
