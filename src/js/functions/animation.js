import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

function animation() {
  tl.fromTo(
    ".hero__left-block",
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
    },
    0.3
  ).fromTo(
    ".hero__boy",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5
    },
    1
  ).fromTo(
    ".hero__head-boy",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5
    },
    1.5
  ).fromTo(
    ".hero__box-top",
    {
      x: -1000,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.5
    },
    1.5
  ).fromTo(
    ".hero__box-bottom",
    {
      x: 1000,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.5
    },
    1.5
  ).fromTo(
    ".header__nav-list a",
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.15
    },
    1.5
  )

  gsap.to('.hero__left-block', {
    scrollTrigger: {
      trigger: '.hero',
      markers: true,
      start: 'top top',
      scrub: true,
    },
    yPercent: 50,
    scale: 0.5,
    xPercent: -80,
  })
  gsap.to('.hero__right-block', {
    scrollTrigger: {
      trigger: '.hero',
      markers: true,
      start: 'top top',
      scrub: true,
    },
    yPercent: 50,
    scale: 0.5,
    xPercent: 80,
  })
}

export default animation;
