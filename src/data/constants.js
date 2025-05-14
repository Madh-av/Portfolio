import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { EmailRounded, LinkedIn } from "@mui/icons-material";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.soft2};
`;

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Logo>{Bio.name}</Logo>
      <Nav>
        <NavLink href={`mailto:${Bio.email}`}>{Bio.email}</NavLink>
        <NavLink href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </NavLink>
      </Nav>
      <SocialMediaIcons>
        <SocialMediaIcon href={`mailto:${Bio.email}`}>
          <EmailRounded />
        </SocialMediaIcon>
        <SocialMediaIcon
          href={Bio.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </SocialMediaIcon>
      </SocialMediaIcons>
      <Copyright>
        &copy; {new Date().getFullYear()} {Bio.name}. All rights reserved.
      </Copyright>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
