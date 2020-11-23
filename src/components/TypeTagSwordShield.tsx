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
    const TagContainer = styled("div", {
      backgroundColor: `${typeColors[type.type.name]}`,
      padding: ".1rem",
      borderRadius: ".5rem",

      md: {
        width: "3rem",
        ":not(:last-child)": {}
      }
    });

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
      <TagContainer>
        {/* <TypeIcon /> */}
        <Tag key={type.type.name}>{type.type.name}</Tag>
      </TagContainer>
    );
  };

  return <TypeTagContainer>{types.map(getTypeTag)}</TypeTagContainer>;
};
