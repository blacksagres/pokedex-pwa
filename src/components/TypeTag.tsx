import React from "react";
import { styled } from "../../stitches.config";
import { typeColors } from "../dynamic-styling/colors";
import { hexToRgbA } from "../dynamic-styling/hex-to-rba";

const TypeTagContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

export const TypeTag = ({ types }) => {
  const getTypeTag = (type) => {
    const Tag = styled("div", {
      transition: "background .3s ease-in-out",

      padding: ".5rem 1rem",
      color: "white",
      textAlign: "center",

      height: ".8rem",
      width: "3.5rem",

      fontSize: ".8rem",
      textTransform: "capitalize",
      textShadow: "2px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",

      border: `.1rem solid ${typeColors[type.type.name]}`,
      background: `linear-gradient(0deg, ${
        typeColors[type.type.name]
      } 15%, ${hexToRgbA(typeColors[type.type.name])} 100%)`,

      borderRadius: ".5rem",

      ":hover": {
        background: `linear-gradient(0deg, ${
          typeColors[type.type.name]
        } 45%, ${hexToRgbA(typeColors[type.type.name])} 100%)`
      }
    });

    return <Tag key={type.type.name}>{type.type.name}</Tag>;
  };

  return <TypeTagContainer>{types.map(getTypeTag)}</TypeTagContainer>;
};
