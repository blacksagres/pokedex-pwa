import gsap, { Bounce } from "gsap";

export const bounceSprite = ({ element }) => {
  return gsap.to(element, {
    ease: Bounce.easeOut,
    y: -10
  });
};
