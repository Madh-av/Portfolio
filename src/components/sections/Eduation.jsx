import React, { useState } from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
// import { Title } from "@mui/icons-material";


const Section = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

const Item = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.divider};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
`;

const Header = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.accordionBg || "#f7f7f7"};
  border: none;
  padding: 16px 20px;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.hoverBg || "#e0e0e0"};
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 14px 16px;
  }
`;

const Panel = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  padding: ${({ isOpen }) => (isOpen ? "12px 20px 16px" : "0 20px")};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary}cc;
  background-color: ${({ theme }) => theme.panelBg || "#fafafa"};
  border-top: 1px solid ${({ theme }) => theme.divider};
  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: ${({ isOpen }) => (isOpen ? "10px 16px 14px" : "0 16px")};
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 20px;
  gap: 20px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Tit = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 10px;

  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
// const SchoolLogo = styled.img`
//   width: 48px;
//   height: 48px;
//   object-fit: contain;
//   border-radius: 8px;
//   background: #fff;
//   margin-right: 16px;
//   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

//   @media (max-width: 600px) {
//     width: 36px;
//     height: 36px;
//     margin-right: 10px;
//   }
// `;

export default function EducationAccordion() {
  const [openId, setOpenId] = useState(null);
  return (
    <Section>
      <Wrapper>
        <Tit>Education</Tit>
      </Wrapper>
      {education.map((e) => (
        <Item key={e.id}>
          <Header onClick={() => setOpenId(openId === e.id ? null : e.id)}>
            <span style={{ display: "flex", alignItems: "center" }}>
              {/* { <SchoolLogo src={e.img} alt={e.school + " logo"} />} */}
              <span>
                {e.date} - {e.school}
              </span>
            </span>
            <span>{openId === e.id ? "−" : "+"}</span>
          </Header>
          <Panel isOpen={openId === e.id}>
            <p>
              <strong>Degree:</strong> {e.degree}
            </p>
            <p>
              <strong>Grade:</strong> {e.grade}
            </p>
            <p>{e.description}</p>
          </Panel>
        </Item>
      ))}
    </Section>
  );
}