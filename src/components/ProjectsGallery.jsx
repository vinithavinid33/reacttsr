import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectsGallery = ({ isHomePage = false }) => {
  const [filter, setFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { id: 1, name: "Grand Emerald Villa", type: "Villa", location: "Vellore", image: "/images/ModernBuilding.png" },
    { id: 2, name: "Tech-Park Phase I", type: "Commercial", location: "Vellore", image: "/images/1000148547-01.png" },
    { id: 3, name: "Skyline Apartments", type: "Apartment", location: "Katpadi", image: "/images/1000148557.jpg" },
    { id: 4, name: "Luxury Living Room interior", type: "Interior", image: "/images/interior-03.png" },
    { id: 5, name: "Modern Apartment", type: "Apartment", image: "/images/WhatsApp Image 2026-04-15 at 12.15.02 PM (2).jpeg" },
    { id: 6, name: "Luxury Bangalow", type: "Villa", location: "Vellore", image: "/images/1000148560-1.jpg" },
    { id: 7, name: "Modern Wall Niche Design", type: "Interior", image: "/images/interior-02.png" },
    { id: 8, name: "Modern Interior for living room", type: "Interior", image: "/images/1000148549.jpg" },
    { id: 9, name: "Luxury Interior", type: "Interior", image: "/images/interior-01.png" },
    { id: 10, name: "Modern House", type: "Villa", image: "/images/WhatsApp Image 2026-04-15 at 12.15.02 PM (10).jpeg" },
    { id: 11, name: "Compact Villa", type: "Villa", image: "/images/WhatsApp Image 2026-04-15 at 12.15.02 PM (5).jpeg" },
    { id: 12, name: "On Going Luxury house building", type: "On-Going", image: "/images/WhatsApp Image 2026-04-15 at 12.15.01 PM (34).jpeg" },
    { id: 13, name: "Luxury Interior", type: "Interior", image: "/images/interior-04.png" },
    { id: 14, name: "Modern Two-Story Compact Home Design", type: "Residential", image: "/images/ModernHouse-01.png" },
     { id: 15, name: "Luxury Interior", type: "Interior", image: "/images/interior-05.png" },
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  // HOME: always 4 | GALLERY: respect showMore
  const visibleProjects = isHomePage
    ? filteredProjects.slice(0, 3)
    : showMore
      ? filteredProjects
      : filteredProjects.slice(0, 3);

  // Enhanced grid: card 0 = big left hero, others fill right
  const getGridClass = (index) => {
    if (index === 0) return "col-span-1 md:col-span-2 md:row-span-2";
    if (!isHomePage && index === 3) return "col-span-1 md:col-span-2";
    return "col-span-1";
  };

  const getHeightClass = (index) => {
    if (index === 0) return "h-[340px] md:h-full";
    return "h-[220px]";
  };

  return (
    <section className="py-16 md:py-20 bg-surface w-full">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-2 font-mono">
              Portfolio
            </p>
            <h2 className="text-4xl font-extrabold text-primary tracking-tight">
              Our Completed Projects
            </h2>
          </div>
          <Link to="/projects">
            <button className="border-b-2 border-primary text-primary font-semibold flex items-center gap-2 group text-sm pb-1">
              View Full Gallery
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </Link>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["All", "Villa", "Apartment", "Commercial", "Interior", "On-Going"].map((category) => (
            <button
              key={category}
              onClick={() => { setFilter(category); setShowMore(false); }}
              className={`px-5 py-2 text-sm border rounded-full transition-all duration-200 ${filter === category
                ? "bg-primary text-white border-primary shadow-sm"
                : "border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-primary"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ENHANCED GALLERY GRID */}
        <div
          className={`grid gap-4 ${isHomePage
            ? "grid-cols-1 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 h-auto md:h-[460px]"
            : "grid-cols-1 md:grid-cols-3 auto-rows-[240px]"
            }`}
        >
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedImage(project)}
              className={`relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer ${getGridClass(index)} ${getHeightClass(index)}`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-60"
              />

              {/* TYPE BADGE */}
              <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.type}
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                <h3 className="text-white text-lg font-bold leading-tight">{project.name}</h3>
                <p className="text-gray-300 text-xs font-mono tracking-wider mt-1">
                  {project.type}{project.location && ` · ${project.location}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-5xl w-full px-4 relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-4 text-white text-3xl hover:opacity-70 transition"
              >
                ✕
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="text-white mt-4 text-center">
                <h3 className="text-xl font-bold">{selectedImage.name}</h3>
                <p className="text-gray-400 text-sm font-mono tracking-wider mt-1">
                  {selectedImage.type}{selectedImage.location && ` · ${selectedImage.location}`}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* LOAD MORE — hidden on home page */}
        {!isHomePage && filteredProjects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-200 font-semibold text-sm tracking-wide"
            >
              {showMore ? "Show Less ↑" : "Load More Projects"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsGallery;