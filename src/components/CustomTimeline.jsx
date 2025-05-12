// src/components/CustomTimeline.jsx
import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// 1) Wrapper for the whole timeline, with customizable line color
const StyledTimeline = styled(VerticalTimeline)`
  & .vertical-timeline::before {
    background: ${({ lineColor }) => lineColor};
    width: 4px;
  }
  margin: 40px 0;
`;

// 2) Wrapper for each timeline element, with clean card styling
const StyledTimelineElement = styled(VerticalTimelineElement)`
  & .vertical-timeline-element-content {
    background: ${({ theme }) => theme.card_light};
    color: ${({ theme }) => theme.text_primary};
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  & .vertical-timeline-element-content:hover {
    transform: translateY(-4px);
  }

  & .vertical-timeline-element-date {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 8px;
  }

  & .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px ${({ lineColor }) => lineColor};
  }
`;

export const CustomTimeline = ({
  lineColor = "#6C63FF",
  animate = false,
  children,
  ...rest
}) => (
  <StyledTimeline lineColor={lineColor} animate={animate} {...rest}>
    {children}
  </StyledTimeline>
);

export const CustomTimelineElement = ({
  date,
  icon,
  iconStyle,
  children,
  ...rest
}) => (
  <StyledTimelineElement
    date={date}
    icon={icon}
    lineColor={rest.lineColor}
    iconStyle={{
      background: "#fff",
      color: lineColor,
      border: `2px solid ${rest.lineColor || "#6C63FF"}`,
      ...(iconStyle || {}),
    }}
    contentArrowStyle={{
      borderRight: `7px solid ${rest.lineColor || "#6C63FF"}`,
    }}
    {...rest}
  >
    {children}
  </StyledTimelineElement>
);
