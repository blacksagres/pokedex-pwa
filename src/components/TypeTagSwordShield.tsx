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

export const TypeTagSwordAndShield = ({ types }) => {
  const getTypeTag = (type) => {
    const TypeIcon = styled("div", {
      height: "67px",
      width: "67px",
      background: `url(https://www.spriters-resource.com/resources/sheets/123/126207.png?updated=1582496833)0 0`
    });

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
      background: `#333`,

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
    return (
      <div>
        {/* <TypeIcon /> */}
        <Tag key={type.type.name}>{type.type.name}</Tag>
      </div>
    );
  };

  return <TypeTagContainer>{types.map(getTypeTag)}</TypeTagContainer>;
};
