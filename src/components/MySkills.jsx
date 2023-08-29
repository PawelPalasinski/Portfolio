import React from "react";
import styled from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGit,
  FaGithub,
  FaFigma,
  FaSass,
  FaNpm,
} from "react-icons/fa";
import { SiRedux, SiJest, SiVite } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GiPolarBear } from "react-icons/gi";

const SkillsContainer = styled.section`
  padding: 2rem;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    min-height: 0;
  }
`;

const SkillsRow = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  max-width: 100%;
  margin-bottom: 2rem;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.scrollbarThumbColor}
    ${({ theme }) => theme.scrollbarTrackColor};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarThumbColor};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.scrollbarTrackColor};
  }
`;

const SkillBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.textColor};
`;

const SkillIcon = styled.div`
  font-size: 60px;
  margin-right: 0.5rem;
  & svg {
    fill: ${({ theme }) => theme.textColor};
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const SkillName = styled.span`
  font-size: 14px;
`;

const skills = [
  { icon: FaHtml5, name: "HTML", category: "Frontend" },
  { icon: FaCss3Alt, name: "CSS", category: "Frontend" },
  { icon: FaSass, name: "Sass/SCSS", category: "Frontend" },
  { icon: FaJs, name: "JavaScript", category: "Frontend" },
  { icon: FaReact, name: "React", category: "Frontend" },
  { icon: SiRedux, name: "Redux", category: "Frontend" },
  { icon: IoLogoNodejs, name: "Node.js", category: "Backend" },
  { icon: DiMongodb, name: "MongoDB", category: "Backend" },
  { icon: FaGit, name: "Git", category: "Other" },
  { icon: FaGithub, name: "GitHub", category: "Other" },
  { icon: SiJest, name: "Jest", category: "Other" },
  { icon: FaNpm, name: "Npm", category: "Other" },
  { icon: BiLogoVisualStudio, name: "Visual Studio Code", category: "Other" },
  { icon: FaFigma, name: "Figma", category: "Other" },
  { icon: GiPolarBear, name: "Zustand", category: "Frontend" },
  { icon: SiVite, name: "Vite", category: "Frontend" },
];

const MySkills = () => {
  const uniqueCategories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <SkillsContainer id="skills">
      {uniqueCategories.map((category) => (
        <SkillsRow key={category}>
          {skills
            .filter((skill) => skill.category === category)
            .map((skill, index) => (
              <SkillBox key={index}>
                <SkillIcon>{React.createElement(skill.icon)}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillBox>
            ))}
        </SkillsRow>
      ))}
    </SkillsContainer>
  );
};

export default MySkills;
