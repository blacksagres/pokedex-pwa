import React from "react";
import { styled } from "../../stitches.config";

const StyledGrid = styled("div", {
  padding: "1rem",

  md: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "1rem"
  },
  lg: {
    gridTemplateColumns: "repeat(4, 1fr)"
  }
});

export const PokeOverviewGrid: React.FC<{}> = (props) => {
  return <StyledGrid>{props.children}</StyledGrid>;
};
