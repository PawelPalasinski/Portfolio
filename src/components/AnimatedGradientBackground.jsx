import React from "react";
import styled, { keyframes } from "styled-components";

import patternImg from "../assets/images/pattern.png";

const animateGradient = keyframes`
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
`;

const GradientBackground = styled.div`
  background: linear-gradient(
    90deg,
    ${({ gradientcolors }) => gradientcolors.join(", ")}
  );
  background-size: 300% 300%;
  animation: ${animateGradient} 10s alternate infinite;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -2;
`;

const ImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${patternImg});
  background-size: 30%;
  background-repeat: repeat;
  opacity: 0.2;
  z-index: -1;
  filter: ${({ theme }) => (theme === "light" ? "invert(100%)" : "none")}
    opacity(0.5) drop-shadow(2px 4px 6px black);
`;

const AnimatedGradientBackground = ({ theme }) => {
  const darkGradientColors = ["#000", "#101010", "#400505"];
  const lightGradientColors = ["#fff", "#c7c7c7", "#8888ff"];

  const gradientcolors =
    theme === "dark" ? darkGradientColors : lightGradientColors;

  return (
    <>
      <GradientBackground gradientcolors={gradientcolors} />
      <ImageOverlay theme={theme} />
    </>
  );
};

export default AnimatedGradientBackground;
