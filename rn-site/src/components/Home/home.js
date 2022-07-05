import React from 'react'
import Nav from '../navBar/navBar';
import Hero from '../hero/hero';
import About from '../about/about'
import ProjectsSection from '../projects_section/projects_section';
import Contact from '../contact/contact';

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />

    </div>
  )
}

export default Home