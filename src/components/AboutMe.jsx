import React from "react";
import styled from "styled-components";

import myImage from "../assets/images/ppremovedbackgroundsmall.png";

const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: right;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 2rem;
`;

const AboutMe = () => {
  return (
    <AboutMeContainer id="about">
      <TextContainer>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          vehicula velit eu augue ullamcorper, a hendrerit quam convallis.
        </p>
        <a
          href="https://drive.google.com/file/d/123zBUWSAUC_vlHR4B0bqsg7nLqTnFvqf/view?usp=sharing"
          download
        >
          <button>My resume</button>
        </a>
      </TextContainer>
      <ImageContainer>
        <Image src={myImage} alt="My Photo" />
      </ImageContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
