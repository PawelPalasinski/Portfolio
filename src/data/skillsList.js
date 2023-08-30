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

export const skills = [
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
