gsap.to("#invitation span", {
  duration: 2,
  opacity: 1,
  y: 0,
  ease: "back.out(1.7)",
  stagger: 0.2,
  repeat: 0,
  
});

gsap.to(".container", {
  duration: 2,
  opacity: 1,
  delay: 2,
  y: -50,
  ease: "back.out(1.7)",
  stagger: 0.2,
  repeat: 0,

});
// function startContainerAnimation() {
//   let tl = gsap.timeline();

//   tl
//     .fromTo(".container", 
//       { opacity: 0, y: 50 }, 
//       { duration: 3, opacity: 1, y: 0, ease: "back.out(1.7)" }
//     )
//   gsap.to(tl, {duration: 3, delay: 0});
// }


// gsap.fromTo(".container", 
//       { opacity: 0, y: 50 }, 
//       { duration: 3, opacity: 1, y: 0, ease: "back.out(1.7)" }
//     )

