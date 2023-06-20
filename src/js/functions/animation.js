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
      start: 'top top',
      scrub: true,
    },
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
    scale: 0.5,
    xPercent: 80,
  })

  gsap.from('.about__left-block', {
    xPercent: -40,
    scrollTrigger: {
      trigger: '.about',
      scrub: true
    }
  })

  gsap.from('.about__right-block', {
    xPercent: 40,
    scrollTrigger: {
      trigger: '.about',
      scrub: true
    }
  })

  gsap.from('.xbox__left-block', {
    xPercent: -40,
    scrollTrigger: {
      trigger: '.xbox',
      scrub: true
    }
  })

  gsap.from('.xbox__right-block', {
    xPercent: 40,
    scrollTrigger: {
      trigger: '.xbox',
      scrub: true
    }
  })

  gsap.from('.plan__subtitle', {
    scrollTrigger: {
      trigger: '.plan',
      start: '-100% center',
      scrub: true
    },
    y: 100,
    scale: 0,
    opacity: 0,
    transformOrigin: 'top center'
  })

  gsap.from('.plan__title', {
    scrollTrigger: {
      trigger: '.plan',
      start: '-100% center',
      scrub: true
    },
    y: 100,
    scale: 0,
    opacity: 0,
    transformOrigin: 'top center'
  })

  gsap.from('.plan__card', {
    scrollTrigger: {
      trigger: '.plan',
      start: 'top center',
      end: '+=500px',
      scrub: true
    },
    scale: 0,
    transformOrigin: 'top center',
    stagger: 0.5
  })
}

export default animation;
