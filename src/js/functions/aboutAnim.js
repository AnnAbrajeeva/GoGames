import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let about = gsap.matchMedia();
about.add("(min-width: 1440px)", () => {
  gsap.from(".about__left-block", {
    xPercent: -40,
    scrollTrigger: {
      trigger: ".about",
      scrub: true,
    },
  });
  gsap.from(".about__right-block", {
    xPercent: 40,
    scrollTrigger: {
      trigger: ".about",
      scrub: true,
    },
  });

  return () => {};
});
