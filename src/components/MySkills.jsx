import React from "react";
import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit } from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { DiMongodb } from "react-icons/di";

const SkillsContainer = styled.div`
  padding: 2rem;
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
`;

const SkillIcon = styled.div`
  font-size: 60px;
  margin-right: 0.5rem;
`;

const SkillName = styled.span`
  font-size: 14px;
`;

const MySkills = () => {
  const skills = [
    { icon: FaHtml5, name: "HTML", category: "Frontend" },
    { icon: FaCss3Alt, name: "CSS (SCSS)", category: "Frontend" },
    { icon: FaJs, name: "JavaScript", category: "Frontend" },
    { icon: FaReact, name: "React", category: "Frontend" },
    { icon: SiRedux, name: "Redux", category: "Frontend" },
    { icon: IoLogoNodejs, name: "Node.js", category: "Backend" },
    { icon: DiMongodb, name: "MongoDB", category: "Backend" },
    { icon: FaGit, name: "Git", category: "Other" },
    // ...dodaj pozostałe umiejętności
  ];

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
