import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';

import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServiceSection from '../components/ServiceSection';
// import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => (
  <div>
    <h1>This is the home page</h1>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProjectsSection />
    {/* <TestimonialsSection /> */}
    <ContactBanner />
  </div>
);

export default Home;
