import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const animateGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const GradientBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(
    -45deg,
    ${({ gradientColors }) => gradientColors.join(", ")}
  );
  background-size: 400% 400%;
  animation: ${animateGradient} 15s linear infinite;
`;

const AnimatedGradientBackground = ({ theme }) => {
  const lightGradientColors = ["#ffffff", "#f0f0f0", "#d0d0d0"];
  const darkGradientColors = ["#000000", "#333333", "#666666"];

  const gradientColors =
    theme === "dark" ? darkGradientColors : lightGradientColors;

  return <GradientBackground gradientColors={gradientColors} />;
};

export default AnimatedGradientBackground;
