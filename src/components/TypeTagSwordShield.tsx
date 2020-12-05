import React from "react";
import { styled } from "../stitches.config";
import { typeColors } from "../dynamic-styling/colors";
import { hexToRgbA } from "../dynamic-styling/hex-to-rba";

const TypeTagContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  variants: {
    mode: {
      row: {
        flexDirection: "row",
        justifyContent: "start",
        flexWrap: "wrap"
      }
    }
  }
});

export const TypeTagSwordAndShield = ({ types, mode }) => {
  const getTypeTag = (type) => {
    const Tag = styled("div", {
      transition: "background .3s ease-in-out",

      padding: ".3rem 1rem",
      color: "white",
      textAlign: "center",

      cursor: "pointer",

      width: "3rem",

      border: `.1rem solid ${typeColors[type.type.name]}`,
      borderLeft: "1.8rem",

      fontSize: ".7rem",
      textTransform: "capitalize",
      textShadow: "1px 1px 1px #000",

      background: `#333`,

      borderRadius: ".5rem",

      position: "relative",

      margin: ".25rem",

      ":hover": {
        background: `#444`
      },

      md: {
        padding: ".3rem 1rem",
        fontSize: ".9rem",
        width: "4rem"
      }
    });

    return <Tag key={type.type.name}>{type.type.name}</Tag>;
  };

  return (
    <TypeTagContainer mode={mode}>{types.map(getTypeTag)}</TypeTagContainer>
  );
};
