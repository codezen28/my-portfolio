import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import EducationSection from "./components/EducationSection/EducationSection";
import { BrowserRouter } from "react-router-dom";
import NewsContent from "./components/News/NewsContent";
import Projects from "./components/Projects/Projects";
import { useState } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [darkMode, setDarkMode] = useState(true);
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Navbar />

        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </Wrapper>
          <Wrapper>
            <EducationSection />

            <NewsContent />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
