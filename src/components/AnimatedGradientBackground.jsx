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
    45deg,
    ${({ gradientColors }) => gradientColors.join(", ")}
  );
  background-size: 300% 300%;
  animation: ${animateGradient} 4s alternate infinite;
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
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: -1;
  filter: ${({ theme }) => (theme === "light" ? "invert(100%)" : "none")};
`;

const AnimatedGradientBackground = ({ theme }) => {
  const lightGradientColors = ["#FFFFFF", "#AAD1E6", "#CAB9E0"];
  const darkGradientColors = ["#6B489D", "#222F5C", "#4F3466"];

  const gradientColors =
    theme === "dark" ? darkGradientColors : lightGradientColors;

  return (
    <>
      <GradientBackground gradientColors={gradientColors} />
      <ImageOverlay theme={theme} />;
    </>
  );
};

export default AnimatedGradientBackground;
