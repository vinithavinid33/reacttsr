import React from "react";

function CTASection() {
  return (
    <section className="py-16 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-hero-gradient rounded-sm p-10 md:p-12 min-h-300px relative overflow-hidden flex flex-col md:flex-row items-center ">  
          {/* Left Content */}
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white mb-6">
              {"Let's Build Your"} <br />
              Dream Project
            </h2>

            <p className="text-primary-fixed text-lg md:text-xl max-w-xl opacity-80">
              Partner with TSR Groups for a seamless construction experience from blueprint to reality.
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10 mt-8 md:mt-0 md:ml-12">
            <button className="bg-on-tertiary-container text-white px-6 py-4 rounded-sm font-headline font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-2xl">
              Contact Us Today
            </button>
          </div>

          {/* Background Decorative Text */}
          <span className="absolute bottom-0 right-0 text-[8rem] md:text-[10rem]    font-black text-white/5 font-headline pointer-events-none uppercase">
            Build
          </span>

        </div>
      </div>
    </section>
  );
}

export default CTASection;