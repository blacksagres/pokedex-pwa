import gsap, { Bounce, Power3 } from "gsap";

export default ({ element }) => {
  return gsap.fromTo(
    element,
    {
      ease: Bounce.easeIn,
      y: -15
    },
    {
      ease: Bounce.easeOut,
      y: 0
    }
  );
};
