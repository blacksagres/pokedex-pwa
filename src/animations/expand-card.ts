import gsap, { Power3, Power2 } from "gsap";

export default ({ element, duration, delay, onComplete }) => {
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
