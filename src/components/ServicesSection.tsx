import { Calculator, Users, FileText, Headphones, Search, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Accounting & Bookkeeping",
      description: "Stay focused on growth while we handle your accounting needs professionally and accurately.",
      color: "bg-primary",
      learnMore: true,
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Stay focused on growth while we handle your payroll needs professionally and accurately.",
      color: "bg-secondary",
      learnMore: true,
    },
    {
      icon: FileText,
      title: "Tax Services",
      description: "Stay focused on growth while we handle your tax preparation and filing needs professionally.",
      color: "bg-[#56b1b3]",
      learnMore: true,
    },
    {
      icon: Headphones,
      title: "Administrative Support",
      description: "Stay focused on growth while we handle your administrative tasks professionally and efficiently.",
      color: "bg-primary",
      learnMore: true,
    },
    {
      icon: Search,
      title: "Audit Support",
      description: "Stay focused on growth while we handle your audit support and compliance needs professionally.",
      color: "bg-secondary",
      learnMore: true,
    },
    {
      icon: UserCheck,
      title: "Outsourcing Services",
      description: "Stay focused on growth while we handle your outsourcing and business process needs professionally.",
      color: "bg-[#56b1b3]",
      learnMore: true,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-4">Explore Our Services</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-primary">Professional Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group transition-all duration-300 border-0 shadow-md hover:bg-[#9e2f0d] hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white group-hover:text-[#9e2f0d]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-secondary group-hover:text-white lg:text-2xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-white lg:text-2xl">
                    {service.description}
                  </CardDescription>
                  {service.learnMore && (
                    <Button variant="link"className="w-full py-3 bg-[#56b1b3] text-white font-semibold lg:text-xl border border-transparent group-hover:border-white group-hover:bg-white/40 text-start transition-colors duration-300">
                      Learn More {">>>"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;