gsap.to("#invitation span", {
  duration: 2,
  opacity: 1,
  y: 0,
  ease: "back.out(1.7)",
  stagger: 0.2,
  repeat: 0,
  onComplete: startContainerAnimation
});

function startContainerAnimation() {
  let tl = gsap.timeline();

  tl
    .fromTo(".container", 
      { opacity: 0, y: 50 }, 
      { duration: 2, opacity: 1, y: 0, ease: "back.out(1.7)" }
    )
  gsap.to(tl, {duration: 2, delay: 5});
}
