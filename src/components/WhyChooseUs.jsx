import React, { useState } from 'react';

const WhyChooseUs = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.log('Image failed to load');
  };

  return (
    <section className="w-full min-h-screen py-24 px-4 sm:px-6" style={{ backgroundColor: '#001b3c', color: 'white' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h3 className="text-on-tertiary-container font-label font-bold tracking-[0.2em] uppercase text-sm">
                The TSR Advantage
              </h3>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight leading-tight text-white">
                Why We are the <br />
                Preferred Choice
              </h2>
            </div>

            {/* Description */}
            <p className="text-primary-fixed text-lg leading-relaxed max-w-2xl">
              With decades of combined expertise, we have mastered the art of balancing speed, cost, and quality.
              Our transparent processes ensure peace of mind for every client.
            </p>

            {/* Features Grid - 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 pt-8">
              {/* Feature 1 */}
              <div className="space-y-4">
                <div 
                  className="flex items-center justify-center w-16 h-16 rounded-sm"
                  style={{ backgroundColor: '#e18600' }}
                >
                  <span className="material-symbols-outlined text-3xl text-white">engineering</span>
                </div>
                <h5 className="text-lg md:text-xl font-headline font-bold text-white">Experienced Team</h5>
                <p className="text-sm md:text-base text-primary-fixed leading-relaxed">
                  Certified professionals with deep industry knowledge.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4">
                <div 
                  className="flex items-center justify-center w-16 h-16 rounded-sm"
                  style={{ backgroundColor: '#e18600' }}
                >
                  <span className="material-symbols-outlined text-3xl text-white">verified</span>
                </div>
                <h5 className="text-lg md:text-xl font-headline font-bold text-white">Quality Materials</h5>
                <p className="text-sm md:text-base text-primary-fixed leading-relaxed">
                  Sourcing only the finest grade A construction supplies.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-4">
                <div 
                  className="flex items-center justify-center w-16 h-16 rounded-sm"
                  style={{ backgroundColor: '#e18600' }}
                >
                  <span className="material-symbols-outlined text-3xl text-white">dashboard_customize</span>
                </div>
                <h5 className="text-lg md:text-xl font-headline font-bold text-white">Custom Solutions</h5>
                <p className="text-sm md:text-base text-primary-fixed leading-relaxed">
                  Unique architectural designs tailored to your vision.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-4">
                <div 
                  className="flex items-center justify-center w-16 h-16 rounded-sm"
                  style={{ backgroundColor: '#e18600' }}
                >
                  <span className="material-symbols-outlined text-3xl text-white">schedule</span>
                </div>
                <h5 className="text-lg md:text-xl font-headline font-bold text-white">On-Time Delivery</h5>
                <p className="text-sm md:text-base text-primary-fixed leading-relaxed">
                  Rigid project management for timely completion.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative w-full rounded-sm overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700">
              {!imageError ? (
                <img
                  className="w-full h-full   object-cover rounded-sm min-h-100 md:min-h-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX1i_2Z6yEYiG9gvrQCvIzVC6B7XProcmm4x6rN_46ndLsFEdYVXtj9gL79XKfP3OvuSw4N_rfeocQ_RXct8jZvWfkqMvELgqM6_mBjnFluAefRBxMM6au8ay7wEFVjZU4hAhWlAUx_HkyUfv-y7VNWAQodpxUwkBsGNyMXzEHULEsf8pAvnYBdyW1s-unW8uUNV9rKJHKMquzJECFAAjxFgKPbj9-DP-23L0iQgYKMVqcBZv80jqv4XR8PDQ_6CM2QGQVhl_-Lc8"
                  alt="Construction crane lifting steel beam"
                  onError={handleImageError}
                  loading="lazy"
                  crossOrigin="anonymous"
                />
              ) : (
                <div 
                  className="w-full min-h-100 md:min-h-125 rounded-sm flex items-center justify-center flex-col gap-4"
                  style={{ backgroundColor: '#003366' }}
                >
                  <span className="material-symbols-outlined text-6xl text-on-tertiary-container">construction</span>
                  <p className="text-white font-headline font-bold text-center">Construction Excellence in Progress</p>
                  <p className="text-primary-fixed text-sm">Building Tomorrow's Landmarks</p>
                </div>
              )}
              
              {/* Safety Badge - Desktop Only */}
              <div 
                className="hidden md:block absolute bottom-8 left-8 p-6 md:p-8 rounded-sm shadow-lg"
                style={{ backgroundColor: '#e18600', color: '#001b3c' }}
              >
                <p className="text-3xl md:text-4xl font-headline font-black">100%</p>
                <p className="font-label text-xs uppercase tracking-widest font-bold mt-2">Safety Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;