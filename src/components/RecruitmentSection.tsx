import { FileUser, UserPlus, Briefcase, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import recruitmentIllustration from "@/assets/recruitment-illustration.jpg";

const RecruitmentSection = () => {
  const recruitmentServices = [
    {
      icon: FileUser,
      title: "EOR - Employee on Record",
      description: "Stay focused on growth while we handle your accounting & recruitment needs with dedication.",
    },
    {
      icon: UserPlus,
      title: "Permanent Hiring (FTE)",
      description: "Stay focused on growth while we handle your permanent hiring and recruitment needs with dedication.",
    },
    {
      icon: Briefcase,
      title: "Contract Staffing",
      description: "Stay focused on growth while we handle your contract staffing and recruitment needs with dedication.",
    },
    {
      icon: Crown,
      title: "Executive Search (C2Os)",
      description: "Stay focused on growth while we handle your executive search and C-level recruitment needs with dedication.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Are You Looking for{" "}
                <span className="text-primary">Recruitment Services</span> too?
              </h2>
            </div>

            <div className="grid gap-6">
              {recruitmentServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-lg font-bold text-secondary">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <img
              src={recruitmentIllustration}
              alt="Professional recruitment services illustration"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;