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

  gsap.set('.card', {
    opacity: 0,
    yPercent: -30
  })

  gsap.to(".card", {
    scrollTrigger: {
      trigger: ".plan",
      start: "-100% center",
      end: "top",
      scrub: 0.5,
    },
    stagger: 0.5,
    duration: 0.3,
    opacity: 1,
    yPercent: 0,
    transformOrigin: "top center",
  });

  return () => {};
});
