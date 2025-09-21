const StatsSection = () => {
  const stats = [
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "20+",
      label: "Industry Served",
    },
    {
      number: "500+",
      label: "Satisfied Clients",
    },
    {
      number: "95%",
      label: "Clients Retention Rate",
    },
  ];

  return (
    <section className="py-16" style={{ background: 'var(--gradient-stats)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/90 font-medium text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;