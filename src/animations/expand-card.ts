import gsap, { Power3, Power2 } from "gsap";

export default ({ element, duration, delay, onComplete }) => {
  return gsap
    .timeline({
      onComplete: onComplete
    })
    .to(
      element,
      {
        height: "70vh",
        width: "80vw",
        zIndex: 10,
        ease: Power3.easeOut
      },
      0
    )
    .to(
      element,
      {
        position: "absolute",

        top: "50%",
        left: "50%",

        y: "-50%",
        x: "-50%",
        ease: Power2.easeOut
      },
      0
    );
};
