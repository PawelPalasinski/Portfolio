import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "../data/projectsList";

const ProjectsContainer = styled.section`
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  min-height: 100vh;
  flex-wrap: wrap;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectCard = styled.article`
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.textColor};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  max-width: 350px;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const Thumbnail = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    max-width: 350px;
  }
`;

const ProjectDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.linkColor};
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.25rem;
    font-size: 25px;
    fill: ${({ theme }) => theme.textColor};
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.5);
    }
  }
`;
const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <Thumbnail src={project.thumbnail} alt={project.title} />
          <ProjectDetails>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              <IconLink href={project.liveDemoLink} target="_blank">
                <FaExternalLinkAlt />
              </IconLink>
              <IconLink href={project.githubLink} target="_blank">
                <FaGithub />
              </IconLink>
            </ProjectLinks>
          </ProjectDetails>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
