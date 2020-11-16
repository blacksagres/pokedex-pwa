import gsap, { Power3 } from "gsap";

export default ({ element, duration, delay, onComplete }) => {
  return gsap.to(element, {
    rotation: "360",
    ease: Power3.easeInOut,
    repeat: -1,
    x: element.offsetWidth * 1.5,
    duration: duration,
    delay: delay,
    yoyo: true,
    // backgroundColor: "#F2003C",
    onComplete: onComplete
  });
};
