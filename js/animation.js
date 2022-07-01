var tl = gsap.timeline({ duration: 0.2 });
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content", {
  rotation: 27,
  x: 100,
  duration: 0.2,
  opacity: 0,
  skewX: 45,
});
gsap.from(".logo", { opacity: 0, y: -10 });
gsap.utils.toArray(".portfolio-item").forEach((heading, i) => {
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading,
      start: "top bottom",
    },
    y: 100,
    opacity: 0,
  });
});
