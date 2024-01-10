gsap.to("#invitation span", {
    duration: 1,
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
        { duration: 1, opacity: 1, y: 0, ease: "back.out(1.7)" } 
      )
      .fromTo(".stars", 
        { opacity: 0, y: 70 }, 
        { duration: 1, opacity: 1, y: 0, ease: "back.out(1.7)" }, 
        "-=0.7" 
      );
}







