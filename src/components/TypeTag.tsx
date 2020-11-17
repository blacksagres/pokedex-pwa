import React from "react";
import { styled } from "../../stitches.config";
import { typeColors } from "../dynamic-styling/colors";

export const TypeTag = ({ types }) => {
  const getTypeTag = (type) => {
    const Tag = styled("div", {
      padding: "1rem 2rem",
      color: "white",

      fontSize: "1.5rem",
      textTransform: "capitalize",
      textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",

      backgroundColor: typeColors[type.type.name]
    });

    return <Tag key={type.type.name}>{type.type.name}</Tag>;
  };

  return types.map(getTypeTag);
};
