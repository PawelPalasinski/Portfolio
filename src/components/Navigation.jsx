import React, { useState } from "react";
import styled from "styled-components";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import NavigationModal from "./NavigationModal";
import { Link } from "react-scroll";

const NavContainer = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1rem;
  z-index: 100;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.navText};
  font-weight: bold;
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 20px 20px 0 0;
  font-size: 30px;
  svg {
    margin-right: 20px;
  }
`;

const Navigation = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <NavContainer>
      <NavLinks>
        <ToggleButton onClick={handleMenuToggle}>
          <AiOutlineMenu />
        </ToggleButton>
      </NavLinks>
      <NavigationModal isOpen={isMenuOpen} onClose={handleMenuToggle}>
        <NavLink to="about" smooth={true} duration={500} onClick={closeMenu}>
          About Me
        </NavLink>
        <NavLink to="skills" smooth={true} duration={500} onClick={closeMenu}>
          My Skills
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500} onClick={closeMenu}>
          Projects
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500} onClick={closeMenu}>
          Contact Me
        </NavLink>
      </NavigationModal>
      <ToggleButton onClick={toggleTheme}>
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </ToggleButton>
    </NavContainer>
  );
};

export default Navigation;
