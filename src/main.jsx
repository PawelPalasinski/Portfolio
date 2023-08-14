import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import AnimatedGradientBackground from "./components/AnimatedGradientBackground";

const lightTheme = {
  navBackground: "#f0f0f0",
  navText: "#333",
  // ... inne style dla jasnego motywu
};

const darkTheme = {
  navBackground: "#333",
  navText: "#f0f0f0",
  // ... inne style dla ciemnego motywu
};

const currentTheme = lightTheme;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <AnimatedGradientBackground
        theme={currentTheme.navBackground === "#333" ? "dark" : "light"}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
