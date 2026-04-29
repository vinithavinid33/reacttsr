import React from 'react';
import { Link } from 'react-router-dom';
 

const HeroSection = () => {
  return (

   <header className="pt-24 md:pt-28 pb-20 relative min-h-230.25 flex items-center overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-40" data-alt="dramatic wide shot of a modern construction site with massive cranes reaching into a blue twilight sky, architectural steel frames visible" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBolRgd7fCRrZtbBZvN9Ux-SIaNDNV4c8VXXuqSSutMnrfpd6A9fziu508ffEzNq_HcwLVwxqisUOuyatDa_JVYc6pzmgj_Vb0GYu-fBfDM9KzmoSsQJ1uhlD4cg6Zz7P9N8DVAjacUFI0KmNSrGGxzLpiUuh5EPcy_Jn2WtV_2urDrsPsHknRZ0x4VpXWtgqNz6WADT3bmtIZL5m6pnaInjFnFqgxMyX_CcDUdWQ-PrJATjdGBYcmP-f8EEHXXFsPb65pmaTztK9g" />
         <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-transparent gap-12"></div>
         </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-tertiary-fixed/10 border border-tertiary-fixed/20 px-3 py-1 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container" />
            <span className="text-tertiary-fixed font-label text-xs uppercase tracking-widest font-semibold">Engineering
              Excellence</span>
          </div>
          <h1 className="word-container text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tighter">
            <span> Building Strong</span> <br /><span>Foundations for</span> <br /><span className="text-on-tertiary-container">Your
              Future</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-fixed leading-relaxed max-w-lg font-light">
            Trusted Construction Experts in Vellore. We transform architectural visions into enduring landmarks
            with precision and integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact"><button className="bg-on-tertiary-container text-white px-8 py-4 rounded-sm font-headline font-bold text-base hover:shadow-xl hover:shadow-on-tertiary-container/20 transition-all flex items-center justify-center gap-2">
              Get Free Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button></a>
             
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-sm font-headline font-bold text-base hover:bg-white/20 transition-all">
              View Projects 
            </button>
    
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;