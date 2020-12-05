import React from "react";
import { styled } from "../stitches.config";

export const StyledSummary = styled("div", {
  height: "50vh",

  scaleY: 0,
  backgroundColor: "$card-bg",

  position: "absolute",

  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)"
});
