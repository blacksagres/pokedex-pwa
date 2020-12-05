import gsap, { Power3, Power2 } from "gsap";

export default ({ element, duration, delay, onComplete }: {element: HTMLElement, duration: number, delay: number, onComplete: () => void}) => {
  return gsap
    .timeline({
      onComplete: onComplete
    })
    .to(
      element,
      {
        scaleY: 1,
        width: "10vw",
        zIndex: 10,
        ease: Power3.easeOut
      },
      0
    );
};
