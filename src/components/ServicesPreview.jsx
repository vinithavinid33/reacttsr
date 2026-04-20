import React from "react";

const ServicesPreview = () => {
  const services = [
    {
      icon: "home",
      title: "Residential Construction",
      description:
        "Crafting bespoke homes that reflect your lifestyle and aspirations with premium finishes.",
    },
    {
      icon: "apartment",
      title: "Commercial Construction",
      description:
        "Scalable and functional commercial spaces designed for productivity and brand impact.",
    },
    {
      icon: "villa",
      title: "Villas & Bungalows",
      description:
        "Luxury living defined through architectural mastery and exclusive gated communities.",
    },
    {
      icon: "business_center",
      title: "Apartments",
      description:
        "High-rise residential complexes built with modern amenities and structural durability.",
    },
    {
      icon: "construction",
      title: "Renovation",
      description:
        "Breathing new life into existing structures with thoughtful design and expert craftsmanship.",
    },
    {
      icon: "architecture",
      title: "Custom Construction",
      description:
        "Tailor-made structural solutions for specialized industrial and private project needs.",
    },
  ];

  return (
    <section className="w-full min-h-screen py-24 sm:py-28 lg:py-32 px-8 sm:px-12 lg:px-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <h3 className="text-on-tertiary-container font-bold tracking-[0.2em] uppercase text-sm">
            What We Do
          </h3>

          <h2 className="text-2xl md:text-4xl font-extrabold text-primary tracking-tight">
            Our Core Services
          </h2>

          <div className="w-auto h-auto bg-on-tertiary-container mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 md:gap-30 px-8 sm:px-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

// ✅ Service Card (Tailwind hover version)
const ServiceCard = ({ service }) => {
  return (
 <div className="group bg-white p-24 sm:p-26 text-center
  hover:bg-blue-950 transition-all duration-500 shadow-md 
  border-b-4 border-transparent hover:border-orange-500
  hover:-translate-y-2 hover:shadow-xl rounded-sm gap-10">

  {/* Icon */}
  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-md 
    flex items-center justify-center mb-8 gap-10 
    group-hover:bg-orange-500 transition-colors duration-300">

    <span className="material-symbols-outlined text-4xl text-blue-950 
      group-hover:text-white transition-colors duration-300 ">
      {service.icon}
    </span>
  </div>

  <div className="flex flex-col gap-4 items-center">
  <h4 className="text-1xl sm:text-3xl font-bold text-blue-950 
    group-hover:text-white transition-colors duration-300">
    {service.title}
  </h4>

  <p className="text-base sm:text-lg leading-relaxed tracking-wide
    text-gray-600 group-hover:text-blue-100 
    transition-colors duration-300 
    text-justify max-w-sm mx-auto">
    {service.description}
  </p>
</div>
</div>
  );
};

export default ServicesPreview;