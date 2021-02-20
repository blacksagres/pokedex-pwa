import React from 'react';
import {
  HoverBar,
  StyledSummaryLink,
  StyledSummaryLinks,
} from './SummaryLinks.styles';

export const SummaryLinks = (props: {
  links: string[];
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}) => {
  const { links, setCurrentTab, currentTab } = props;
  return (
    <StyledSummaryLinks>
      {links.map((link) => (
        <StyledSummaryLink
          key={`summary-link-${link}`}
          isCurrent={link === currentTab}
          onClick={() => setCurrentTab(link)}
        >
          <span>{link}</span>
          <HoverBar />
        </StyledSummaryLink>
      ))}
    </StyledSummaryLinks>
  );
};
