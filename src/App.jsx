import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import AnimatedGradientBackground from "./components/AnimatedGradientBackground";
import Navigation from "./components/Navigation";

const AppContainer = styled.div`
  position: relative;
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
      <AppContainer>
        <AnimatedGradientBackground theme={theme} />
        <Navigation theme={theme} toggleTheme={toggleTheme} /> <AboutMe />
        <MySkills theme={theme} />
        <Projects />
        <ContactMe />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
