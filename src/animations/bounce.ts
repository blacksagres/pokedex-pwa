import gsap, { Bounce } from "gsap";

export default ({ element }: { element: HTMLElement}) => {
  return gsap.fromTo(
    element,
    {
      ease: Bounce.easeIn,
      y: -5,
      duration: 0.3
    },
    {
      ease: Bounce.easeOut,
      y: 0,
      duration: 0.8
    }
  );
};
