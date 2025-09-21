const SoftwareSection = () => {
  const software = [
    { name: "Tally", color: "bg-blue-500" },
    { name: "QuickBooks", color: "bg-green-500" },
    { name: "Xero", color: "bg-cyan-500" },
    { name: "Sage", color: "bg-red-500" },
    { name: "Zoho", color: "bg-purple-500" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our <span className="text-primary">Software Expertise</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {software.map((item, index) => (
            <div
              key={index}
              className="group hover:scale-110 transition-transform duration-300"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold text-sm">
                  {item.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <p className="text-center mt-2 text-sm font-medium text-muted-foreground">
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