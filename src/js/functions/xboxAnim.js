import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let xbox = gsap.matchMedia();
xbox.add("(min-width: 1440px)", () => {
  gsap.from(".xbox__left-block", {
    xPercent: -40,
    scrollTrigger: {
      trigger: ".xbox",
      scrub: true,
    },
  });

  gsap.from(".xbox__right-block", {
    xPercent: 40,
    scrollTrigger: {
      trigger: ".xbox",
      scrub: true,
    },
  });

  return () => {};
});
