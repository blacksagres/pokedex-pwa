import { createStyled } from "@stitches/react";

export const { styled, css } = createStyled({
  prefix: "",
  // https://stitches.dev/docs/tokens
  tokens: {
    colors: {
      "$almost-white": "#fcfefb"
    },
    radii: {
      $card: "1rem"
    }
  },
  breakpoints: {
    sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
    md: (rule) => `@media (min-width: 768px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    xl: (rule) => `@media (min-width: 1280px) { ${rule} }`
  },
  utils: {}
});
