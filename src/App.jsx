import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { animateScroll as scroll } from "react-scroll";

import Navigation from "./components/Navigation";
import AnimatedGradientBackground from "./components/AnimatedGradientBackground";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const AppContainer = styled.main`
  height: 100vh;
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
      navText: "#000",
      navTextHover: "#fff",
      navTextBackground: `transparent`,
      navTextBackgroundHover: `#000`,
      textColor: "#333",
      textHover: "#fff",
      buttonColor: "#fff",
      buttonHover: "#000",
      cardBackground: "#0003",
    },
    dark: {
      navBackground: "#333333ad",
      navText: "#fff",
      navTextHover: "#000",
      navTextBackground: `transparent`,
      navTextBackgroundHover: `#fff`,
      textColor: "#fff",
      textHover: "#000",
      buttonColor: "#000",
      buttonHover: "#fff",
      cardBackground: "#fff3",
    },
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <ThemeProvider theme={themeConfig[theme]}>
      <AppContainer>
        <AnimatedGradientBackground theme={theme} />
        <Navigation
          theme={theme}
          toggleTheme={toggleTheme}
          scrollToSection={scrollToSection}
        />
        <AboutMe theme={theme} />
        <MySkills theme={theme} />
        <Projects theme={theme} />
        <ContactMe theme={theme} />
        <Footer theme={theme} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
