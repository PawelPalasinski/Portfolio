import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { FaFilePdf } from "react-icons/fa";

import myImage from "../assets/images/ppremovedbackgroundsmall.png";

import MyName from "./MyName";
import SocialLinks from "./SocialLinks";

const AboutMeContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 3rem;
  color: ${({ theme }) => theme.textColor};
  min-height: 80vh;
`;

const NameAndLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 60vh;
  min-width: 250px;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 10%;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  margin-left: 2em;
`;

const CvButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 1em;

  &:hover {
    background-color: #fff;
    color: #333;
  }

  & svg {
    margin-left: 10px;
  }
`;

const AboutMe = () => {
  const theme = useContext(ThemeContext);

  return (
    <AboutMeContainer id="about" theme={theme}>
      <ImageContainer>
        <Image src={myImage} alt="My Photo" />
        <NameAndLinksWrapper>
          <MyName />
          <SocialLinks />
        </NameAndLinksWrapper>
      </ImageContainer>

      <TextContainer>
        <h2>Hi, I'm Paweł</h2>
        <p>
          Passionate frontend developer with 12-month course completion, 600+
          hours on freeCodeCamp, HackerRank certifications, and projects in
          HTML, CSS (including SCSS), JS, React, Redux, and Zustand. Ready to
          deliver top-quality solutionss.
        </p>
        <a
          href="https://drive.google.com/file/d/123zBUWSAUC_vlHR4B0bqsg7nLqTnFvqf/view?usp=sharing"
          download
        >
          <CvButton>
            My resume
            <FaFilePdf />
          </CvButton>
        </a>
      </TextContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
