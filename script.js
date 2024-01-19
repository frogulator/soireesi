gsap.to("#invitation span", {
  duration: 2,
  opacity: 1,
  y: 0,
  ease: "back.out(1.7)",
  stagger: 0.2,
  repeat: 0,
  
});

gsap.fromTo(".container", 
      { opacity: 0, y: 100 }, 
      { duration: 3, opacity: 1, y: 0, ease: "back.out(2)", delay: 1 }
    )
