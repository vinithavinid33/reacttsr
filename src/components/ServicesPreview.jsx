import { useState } from "react";

const ServicesPreview = () => {
  const [activeIndex, setActiveIndex] = useState(null);

 
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
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h3 className="text-on-tertiary-container font-bold tracking-[0.2em] uppercase text-sm">
            What We Do
          </h3>

          <h2 className="text-2xl md:text-4xl font-extrabold text-primary tracking-tight">
            Our Core Services
          </h2>

          <div className="w-24 h-1.5 bg-on-tertiary-container mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-6 sm:px-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isActive={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// ✅ Service Card (Tailwind hover version)
const ServiceCard = ({ service }) => {
  return (
 <div className="group bg-white p-4 sm:p-6 text-center
  hover:bg-blue-950 transition-all duration-500 shadow-md 
  border-b-4 border-transparent hover:border-orange-500
  hover:-translate-y-2 hover:shadow-xl rounded-sm">

  {/* Icon */}
  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-md 
    flex items-center justify-center mb-8 gap-10 
    group-hover:bg-orange-500 transition-colors duration-300">

    <span className="material-symbols-outlined text-4xl text-blue-950 
      group-hover:text-white transition-colors duration-300 ">
      {service.icon}
    </span>
  </div>

  <div className="flex flex-col gap-8 items-center">
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