import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import swImg from "../assets/images/sw.png";
import pbImg from "../assets/images/pb.png";
import msImg from "../assets/images/ms.png";
import psImg from "../assets/images/ps.png";
import wsImg from "../assets/images/ws.png";

const ProjectsContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  min-height: 100vh;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-between;
    flex-direction: column;
  }
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.textColor};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  max-width: 350px;
  height: 480px;

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
  const projects = [
    {
      title: "Star Wars Destiny App",
      description:
        "This app is Star Wars Destiny card browser. You can browse all cards, filter them by type, set, and rarity, and create youir own collections. The app uses data from swdestinydb.com API and stores data in local storage. The app is written in React (Vite) and uses Zustand to manage state.",
      thumbnail: swImg,
      liveDemoLink: "https://pawelpalasinski.github.io/SWDDB/",
      githubLink: "https://github.com/PawelPalasinski/SWDDB",
    },
    {
      title: "Phonebook App",
      description:
        "A simple phone book application that allows you to register and store data (names and phone numbers). Application works with backend.",
      thumbnail: pbImg,
      liveDemoLink: "https://pp-phonebook.netlify.app",
      githubLink:
        "https://github.com/PawelPalasinski/goit-react-hw-08-phonebook",
    },
    {
      title: "TMDB Movie App",
      description:
        "TMDB Movie App is a web application that allows you to browse movies from The Movie Database (TMDB). The app is built using React and utilizes the TMDB API to fetch movie data.",
      thumbnail: msImg,
      liveDemoLink: "https://pp-tmdb-movie-app.netlify.app",
      githubLink: "https://github.com/PawelPalasinski/goit-react-hw-05-movies",
    },
    {
      title: "Pixabay Image Search App",
      description: "A simple website to search images on Pixabay",
      thumbnail: psImg,
      liveDemoLink: "https://pawelpalasinski.github.io/goit-js-hw-11/",
      githubLink: "https://github.com/PawelPalasinski/goit-js-hw-11",
    },
    {
      title: "WebStudio",
      description: "WebStudio - Landing page of Web Design Studio",
      thumbnail: wsImg,
      liveDemoLink: "https://pawelpalasinski.github.io/goit-markup-hw-08/",
      githubLink: "https://github.com/PawelPalasinski/goit-markup-hw-08",
    },
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
