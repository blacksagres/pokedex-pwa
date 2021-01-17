import React, { useEffect, useRef } from "react";
import { styled } from "../stitches.config";
import { infiniteRotation } from "../animations";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const PokeCircle = styled(motion.div, {
  position: "relative",
  cursor: 'pointer',
  border: ".25rem solid black",
  borderRadius: "50%",
  userSelect: 'none',

  width: "3rem",
  height: "3rem",

  // transform: 'scale(.7)',

  variants: {
    fill: {
      white: {
        backgroundColor: "#fff"
      }
    },
    scope: {
      child: {
        position: "absolute",

        top: "50%",
        left: "50%",

        transform: "translate(-50%, -50%)"
      }
    },
    size: {
      big: {
        width: "3rem",
        height: "3rem"
      },
      medium: {
        width: "1rem",
        height: "1rem"
      },
      smol: {
        width: ".5rem",
        height: ".5rem",

        border: ".15rem solid black"
      }
    }
  },

  // md: {
  //   transform: 'scale(1)',
  // }
});

const HalfCircle = styled("div", {
  boxSizing: "border-box",

  background:
    "linear-gradient(90deg, rgba(132,22,23,1) 35%, rgba(210,18,46,1) 65%)",

  width: "3rem",
  height: "1.5rem",

  borderRadius: "2.5rem 2.5rem 0 0",
  borderBottom: ".3rem solid black"

  // transformOrigin: "bottom"
});

export const SwordAndShieldLoader = () => {
  const history = useHistory();

  return (
    <PokeCircle
      whileTap={{ rotate: 180, scale: 1.1 }}
      onTap={() => history.push('/')}>
      <HalfCircle data-label="half-circle" />
      <PokeCircle scope="child" size="medium" fill="white" />
      <PokeCircle scope="child" size="smol" />
    </PokeCircle>
  );
};
