import React from "react";
import { styled } from "../../stitches.config";
import { typeColors } from "../dynamic-styling/colors";
import { hexToRgbA } from "../dynamic-styling/hex-to-rba";

export const TypeTag = ({ types }) => {
  const getTypeTag = (type) => {
    const Tag = styled("div", {
      padding: "1rem 2rem",
      color: "white",
      textAlign: "center",

      fontSize: "1rem",
      textTransform: "capitalize",
      textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",

      border: `.1rem solid ${typeColors[type.type.name]}`,
      background: `linear-gradient(0deg, ${
        typeColors[type.type.name]
      } 15%, ${hexToRgbA(typeColors[type.type.name])} 100%)`,

      borderRadius: ".5rem"
    });

    return <Tag key={type.type.name}>{type.type.name}</Tag>;
  };

  return types.map(getTypeTag);
};
