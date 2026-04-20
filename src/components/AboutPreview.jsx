import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
 <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <img className="w-full aspect-4/5 object-cover rounded-sm shadow-2xl" data-alt="close-up of a professional construction engineer in a white hard hat reviewing technical blueprints on a sunny site" src="images/1000148548-1.jpg" />
                    <div className="bg-primary p-8 text-white rounded-sm">
                      <p className="text-4xl font-headline font-black text-on-tertiary-container">15+</p>
                      <p className="text-sm font-label uppercase tracking-widest opacity-80">Years of Experience
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <img className="w-full aspect-4/5 object-cover rounded-sm shadow-2xl" data-alt="architectural low angle shot of a sleek modern apartment building facade with glass balconies under a bright sky" src="images/1000148560-1.jpg" />
                    <img className="w-full aspect-square object-cover rounded-sm shadow-2xl" data-alt="construction site interior showing heavy industrial wooden scaffolding and concrete structural beams in sunlight" src="images/1000148547.jpg" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-on-tertiary-container font-label font-bold tracking-[0.2em] uppercase text-sm">
                    Our Legacy</h3>
                  <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight leading-tight">
                    Leading the Way in Construction Excellence
                  </h2>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  TSR Groups stands at the forefront of the construction industry in Vellore, driven by a
                  commitment to quality, safety, and innovation. We don't just build structures; we build trust
                  through every brick laid and every beam raised.
                </p>
                <ul className="space-y-4 font-headline font-bold text-primary">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-tertiary-container" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
                    Uncompromising Quality Standards
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-tertiary-container" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
                    Client-Centric Approach
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-tertiary-container" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
                    Expert Engineering Team
                  </li>
                </ul>
                <a href="about.html">
                  <button className="bg-surface-container-high text-primary font-headline font-bold px-8 py-4 rounded-sm hover:bg-primary hover:text-white transition-all duration-300">
                    Learn More About Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
  );
};

export default AboutPreview;