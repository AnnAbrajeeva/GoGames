import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let plan = gsap.matchMedia();
plan.add("(min-width: 1440px)", () => {
  gsap.from(".plan__subtitle", {
    scrollTrigger: {
      trigger: ".plan",
      start: "-100% center",
      scrub: true,
    },
    y: 100,
    scale: 0,
    opacity: 0,
    transformOrigin: "top center",
  });

  gsap.from(".plan__title", {
    scrollTrigger: {
      trigger: ".plan",
      start: "-100% center",
      scrub: true,
    },
    y: 100,
    scale: 0,
    opacity: 0,
    transformOrigin: "top center",
  });

  gsap.from(".plan__card", {
    scrollTrigger: {
      trigger: ".plan",
      start: "-500 top",
      end: "+=500px",
      scrub: true,
    },
    opacity: 0,
    yPercent: -50,
    transformOrigin: "top center",
    stagger: 0.8,
  });

  return () => {};
});
