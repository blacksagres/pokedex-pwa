import React from "react";
import { styled } from "../../stitches.config";
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
        justifyContent: "left"
      }
    }
  }
});

export const TypeTagSwordAndShield = ({ types, mode }) => {
  const getTypeTag = (type, mode) => {
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

      ":hover": {
        background: `#444`
      },

      ":not(:last-child)": {
        marginBottom: ".5rem"
      },

      variants: {
        mode: {
          row: {
            ":not(:last-child)": {
              marginBottom: "0",
              marginRight: ".5rem",

              md: {
                marginBottom: "0"
              }
            }
          }
        }
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

    return (
      <Tag mode={mode} key={type.type.name}>
        {type.type.name}
      </Tag>
    );
  };

  return (
    <TypeTagContainer mode={mode}>
      {types.map((type) => getTypeTag(type, mode))}
    </TypeTagContainer>
  );
};
