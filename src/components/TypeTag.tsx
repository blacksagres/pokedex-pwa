import React from "react";
import { styled } from "../stitches.config";
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

      padding: ".3rem 1rem",
      color: "white",
      textAlign: "center",

      width: "3rem",

      fontSize: ".7rem",
      textTransform: "capitalize",
      textShadow: "1px 1px 1px #000",

      border: `.1rem solid ${typeColors[type.type.name]}`,
      background: `linear-gradient(0deg, ${
        typeColors[type.type.name]
      } 15%, ${hexToRgbA(typeColors[type.type.name])} 100%)`,

      borderRadius: ".5rem",

      ":hover": {
        background: `linear-gradient(0deg, ${
          typeColors[type.type.name]
        } 45%, ${hexToRgbA(typeColors[type.type.name])} 100%)`
      },

      ":not(:last-child)": {
        marginBottom: ".5rem"
      },

      md: {
        padding: ".3rem 1rem",
        fontSize: ".9rem",

        width: "4rem",

        ":not(:last-child)": {
          marginBottom: "1rem"
        }
      }
    });

    return <Tag key={type.type.name}>{type.type.name}</Tag>;
  };

  return <TypeTagContainer>{types.map(getTypeTag)}</TypeTagContainer>;
};
