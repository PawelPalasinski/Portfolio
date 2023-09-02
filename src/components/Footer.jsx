import React from "react";
import styled from "styled-components";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const StyledFooter = styled.footer`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  & p {
    color: ${({ theme }) => theme.textColor};
    font-size: 14px;
  }

  @media (max-width: 768px) {
    & p {
        font-size: 12px;
    }
  }

  & ul {
    display: flex;
    & li:first-child {
      margin-right: 10px;
    }
      svg {
        fill: ${({ theme }) => theme.textColor};
      }

    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2023 Pawel Palasinski</p>
      <ul>
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
      </ul>
    </StyledFooter>
  );
};

export default Footer;
