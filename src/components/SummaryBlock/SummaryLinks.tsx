import React from 'react';
import { StyledSummaryLink, StyledSummaryLinks } from "./SummaryLinks.styles";

export const SummaryLinks = (props: { links: string[] }) => {
  const { links } = props;
  return <StyledSummaryLinks>
    {links.map(link => <StyledSummaryLink>
      <span>{link}</span>
      <div className="link-bottom" />
    </StyledSummaryLink>)}
  </StyledSummaryLinks>
}