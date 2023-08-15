import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-scroll";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import AnimatedGradientBackground from "./components/AnimatedGradientBackground";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.navBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  z-index: 100;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.navText};
  margin: 0 1rem;
  font-weight: bold;
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const themeConfig = {
    light: {
      navBackground: "#f0f0f0ad",
      navText: "#333",
      textColor: "#333",
    },
    dark: {
      navBackground: "#333333ad",
      navText: "#fff",
      textColor: "#fff",
    },
  };

  return (
    <ThemeProvider theme={themeConfig[theme]}>
      <div>
        <AnimatedGradientBackground theme={theme} />
        <Nav>
          <NavLink to="about" smooth={true} duration={500}>
            About Me
          </NavLink>
          <NavLink to="skills" smooth={true} duration={500}>
            My Skills
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500}>
            Projects
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500}>
            Contact Me
          </NavLink>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </Nav>
        <AboutMe />
        <MySkills theme={theme} />
        <Projects />
        <ContactMe />
      </div>
    </ThemeProvider>
  );
};

export default App;
