import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Anderson",
      role: "Chief Executive Officer",
      description: "Stay focused on growth while we handle your accounting & bookkeeping needs professionally and accurately.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sarah Williams",
      role: "Chief Financial Officer", 
      description: "Stay focused on growth while we handle your financial planning and strategy needs professionally and accurately.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b029?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Head of Recruitment",
      description: "Stay focused on growth while we handle your recruitment and talent acquisition needs professionally and accurately.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-4">Our Team</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-primary">Management Team</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.description}
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <a href="#" className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;