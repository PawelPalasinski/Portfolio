import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex: 1;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-right: 1rem;
`;

const ProjectDetails = styled.div`
  flex: 1;
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
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      thumbnail: "url-to-thumbnail-1.jpg",
      liveDemoLink: "https://example.com/demo1",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      thumbnail: "url-to-thumbnail-2.jpg",
      liveDemoLink: "https://example.com/demo2",
      githubLink: "https://github.com/yourusername/project2",
    },
    // ...dodaj pozostałe projekty
  ];

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
                <FaExternalLinkAlt /> Live Demo
              </IconLink>
              <IconLink href={project.githubLink} target="_blank">
                <FaGithub /> GitHub Repo
              </IconLink>
            </ProjectLinks>
          </ProjectDetails>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
