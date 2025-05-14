// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { LinkedIn } from "@mui/icons-material";

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

const ContactText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
  margin: 0.5rem 0;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1rem 0;
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
      <ContactText>Email: {Bio.email}</ContactText>
      <SocialMediaIcons>
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
