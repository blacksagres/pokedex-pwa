import gsap, { Power3 } from "gsap";

export default ({ element, duration, delay, onComplete }) => {
  return gsap
    .timeline()
    .to(element, {
      transformOrigin: "center",
      width: "80vw"
    })
    .to(element, {
      height: "70vh",
      position: "absolute",

      top: "50%",
      left: "50%",
      y: "-50%",
      x: "-50%",

      onComplete: onComplete
    });
};
