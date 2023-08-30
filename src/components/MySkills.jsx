import React from "react";
import styled from "styled-components";

import { skills } from "../data/skillsList";

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
