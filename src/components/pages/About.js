import React from 'react';
import Experience from '../About/Experience';
import Header from '../About/Header';
import Introduce from '../About/Introduce';
import RecentWork from '../About/RecentWork';
import Skill from '../About/Skill';
import OtherExperience from '../About/OtherExperience';
import AvailableTools from '../About/AvailableTools';
import Footer from '../About/Footer';

const About = () => {
  return (  
    <main>
      <Header />
      <Introduce />
      <Skill />
      <RecentWork />
      <Experience />
      <OtherExperience />
      <AvailableTools />
      <Footer />
    </main>
  );
}
 
export default About;