import React, { useState } from 'react';
import { Link } from 'react-router-dom';

 

const ProjectsGallery = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full min-h-screen py-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h3 className="text-on-tertiary-container font-label font-bold tracking-[0.2em] uppercase text-sm">
              Portfolio
            </h3>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">
              Our Completed Projects
            </h2>
          </div>
          <Link to="/projects">
            <button  onClick={() => setShowMore(!showMore)} className="text-primary font-headline font-bold flex items-center gap-2 group border-b-2 border-on-tertiary-container pb-1 whitespace-nowrap">
             
                {showMore ? "Back" : "View Full Gallery"}
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                arrow_right_alt
              </span>
            </button>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-200">
          {/* Large Project 1 */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-sm min-h-75 md:min-h-auto">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src="/images/ModernBuilding.png"
              alt="Grand Emerald Villa"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
              <h5 className="text-white text-2xl font-headline font-bold">Grand Emerald Villa</h5>
              <p className="text-primary-fixed/80">Residential Luxury | Vellore</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-sm min-h-75 md:min-h-auto">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src="/images/1000148547.jpg"
              alt="Tech-Park Phase I"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
              <h5 className="text-white text-xl font-headline font-bold">Tech-Park Phase I</h5>
              <p className="text-primary-fixed/80">Commercial Development</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative group overflow-hidden rounded-sm min-h-50 md:min-h-auto">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src="/images/1000148557.jpg"
              alt="Skyline Apartments"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-sm">
              <h5 className="text-white font-headline font-bold">Skyline Apartments</h5>
            </div>
          </div>

          {/* Project 4 */}
          <div className="relative group overflow-hidden rounded-sm min-h-50 md:min-h-auto">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src="/images/1000148549.jpg"
              alt="Private Bungalow"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-sm">
              <h5 className="text-white font-headline font-bold">Private Bungalow</h5>
            </div>
          </div>
        </div>



        {/* 🔥 Hidden Projects */}
        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">

            <div className="relative overflow-hidden rounded-sm">
              <img  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               src="/images/WhatsApp Image 2026-04-15 at 12.15.02 PM (2).jpeg"  />
            </div>

            <div className="relative overflow-hidden rounded-sm">
              <img src="/images/WhatsApp Image 2026-04-15 at 12.15.02 PM (15).jpeg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700w-full h-60 object-cov" />
            </div>

            <div className="relative overflow-hidden rounded-sm">
              <img src="/images/WhatsApp Image 2026-04-15 at 12.15.01 PM (24).jpeg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="relative overflow-hidden rounded-sm">
              <img src="/images/WhatsApp Image 2026-04-15 at 12.15.02 PM (5).jpeg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

          </div>
        )}

      
      </div>
    </section>
  );
};

export default ProjectsGallery;