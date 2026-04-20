import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutPreview from '../components/AboutPreview';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsGallery from '../components/ProjectsGallery';
import CTABanner from '../components/CTABanner';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="bg-surface font-body text-on-surface">
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <ProjectsGallery />
      <CTABanner />
      <ContactForm />
    </div>
  );
};

export default Home;