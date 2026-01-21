import React, {useRef} from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Content from './components/Content';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import BackgroundShapes from './components/BackgroundShapes'


const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    const headerOffset = 200; // Adjust based on your AppBar height (default MUI AppBar is ~64px)
    const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  

  return (
    <div>
      {/* Pass the scroll function to Header for navigation */}
      <BackgroundShapes/>
      <Header
        onScrollToSection={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          content: () => scrollToSection(contentRef),
          skills: () => scrollToSection(skillsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />
      <Box sx={{
        maxWidth: "89%",
        margin: "auto",
        // border: "2px solid red"
      }}>
       {/* Sections with attached refs */}
      <section ref={homeRef}>
        <Home />
      </section>

       <section ref={aboutRef}>
        <AboutMe />
      </section>

      <section ref={contentRef}>
        <Content />
      </section>

      <section ref={skillsRef}>
        <Skills />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>
      </Box>
      <section>
        <Footer/>        
      </section> 
    </div>
  );
};

export default App;