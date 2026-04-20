import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
   <section className="py-16 my-10 ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-hero-gradient rounded-sm p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="relative z-10 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white mb-6">Let's Build Your
                  <br />Dream Project
                </h2>
                <p className="text-primary-fixed text-lg md:text-xl max-w-xl opacity-80">Partner with TSR Groups for a
                  seamless construction experience from blueprint to reality.</p>
              </div>
              <div className="relative z-10">
                <button className="bg-on-tertiary-container text-white px-10 py-5 rounded-sm font-headline font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-2xl">
                  Contact Us Today
                </button>
              </div>
              {/* Background Decorative Text */}
              <span className="absolute -bottom-10 -right-10 text-[10rem] font-black text-white/5 font-headline pointer-events-none uppercase">Build</span>
            </div>
          </div>
          </section>
  );
};

export default CTABanner;