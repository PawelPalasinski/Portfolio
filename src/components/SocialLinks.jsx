import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const LinksList = styled.ul`
  display: flex;
  list-style: none;
  margin: 60px auto;
  padding: O;
  & li:first-child {
    padding-right: 20px;
  }
  & li {
    font-size: 25px;
    & a {
      text-decoration: none;
      svg {
        fill: ${({ theme }) => theme.textColor};
        margin-right: 0.25rem;
        font-size: 25px;
        transition: all 0.2s ease-in-out;
        &:hover {
          transform: scale(1.5);
        }
      }
    }
  }
`;

const SocialLinks = () => {
  const theme = useContext(ThemeContext);

  return (
    <LinksList theme={theme}>
      <li>
        <a
          href="https://github.com/PawelPalasinski"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/pawe%C5%82pa%C5%82asi%C5%84ski"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
    </LinksList>
  );
};

export default SocialLinks;
