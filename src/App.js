import React, {useRef} from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Content from './components/Content';
import Skills from './components/Skills';
import Contact from './components/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Needed for modal functionality


const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    const headerOffset = 64; // Adjust based on your AppBar height (default MUI AppBar is ~64px)
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
      <Header
        onScrollToSection={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          content: () => scrollToSection(contentRef),
          skills: () => scrollToSection(skillsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

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
    </div>
  );
  // return (
  //   <Router>
  //     <Header />
  //     <Routes>
  //       <Route path="/" element={<AboutMe />}/>
  //       <Route path="/about" element={<AboutMe />} />
  //       <Route path="/content" element={<Content />} />
  //       <Route path="/skills" element={<Skills />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Routes>
  //   </Router>
  // );
};

export default App;