import { createStyled } from "@stitches/react";

export const { styled, css } = createStyled({
  prefix: "",
  tokens: {},
  breakpoints: {
    sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
    md: (rule) => `@media (min-width: 768px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    xl: (rule) => `@media (min-width: 1280px) { ${rule} }`
  },
  utils: {}
});
