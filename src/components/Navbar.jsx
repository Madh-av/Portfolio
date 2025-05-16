// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import gitLogo from "../data/gitLogo.png";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.nav`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  /* max-width: 1200px; */ /* optional centered inner width */
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkR)`
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  // border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: right;
  display: flex;
  align-items: center;
  // right:0;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  // transition: all 0.6s ease-in-out;
  text-decoration: none;
  // &:hover {
  //   background: ${({ theme }) => theme.primary};
  //   color: ${({ theme }) => theme.text_primary};
  // }
  width: 25vw;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: left;
    left: 0;

    display: block;
  }
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = styled.ul`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.card_light}99;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 40px 24px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  // Close mobile menu if viewport exceeds 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">MADHAV</NavLogo>

        <MobileIcon onClick={() => setIsOpen((prev) => !prev)}>
          <MenuRounded style={{ color: theme.text_primary }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        <MobileMenu isOpen={isOpen}>
          <NavLink onClick={() => setIsOpen(false)} href="#About">
            About
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} href="#Skills">
            Skills
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} href="#Projects">
            Projects
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} href="#Education">
            Education
          </NavLink>
          <GithubButton
            href={Bio.github}
            target="_blank"
            style={{
              background: theme.primary,
              color: theme.text_primary,
            }}
          >
            Github Profile
          </GithubButton>
        </MobileMenu>

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            <img src={gitLogo} alt="GitHub" style={{ width: 40, height: 40 }} />
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
