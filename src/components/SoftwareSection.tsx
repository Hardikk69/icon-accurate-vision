import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

const SoftwareSection = () => {
  const software = [
    { name: "Xero", logo: logo1, color: "text-blue-600" },
    { name: "QuickBooks", logo: logo2, color: "text-green-600" },
    { name: "Tally", logo: logo3, color: "text-red-600" },
    { name: "Recon", logo: logo4, color: "text-orange-600" },
    { name: "MYOB", logo: logo5, color: "text-purple-600" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="text-primary">Software Expertise</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {software.map((item, index) => (
            <div key={index} className="group hover:scale-110 transition-transform duration-300 text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-border group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img src={item.logo}alt={`${item.name} logo`}className="w-12 h-12 object-contain"/>
              </div>
              <p className="text-center mt-3 text-sm font-medium text-muted-foreground">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;