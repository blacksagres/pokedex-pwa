import { styled } from "../../stitches.config";

export const Button = styled("button", {
  color: "white",
  cursor: "pointer",

  backgroundColor: "hsl(206,100%,50%)",
  borderRadius: "100%",
  border: ".3rem solid white",

  padding: "2rem",
  margin: ".5rem",

  fontSize: "110%",
  textDecoration: "none",
  appearance: "none",
  transition: "all 200ms ease",
  userSelect: "none",

  ":active": {
    transform: "translateY(0px)"
  },

  ":hover": {
    boxShadow: "0 5px 15px rgba(0, 0, 0, .12)",
    transform: "translateY(-2px)"
  },

  variants: {
    color: {
      white: {
        backgroundColor: "transparent",
        color: "hsl(206,10%,44%)",
        ":hover": {
          backgroundColor: "white",
          color: "hsl(206,10%,5%)"
        }
      }
    }
  }
});
