((function init(){
    const tl = gsap.timeline();

    tl.fromTo('.preload', { opacity: 0}, { opacity: 1, duration: 2 })
    .to('.preload', { opacity: 0, ease: "power1.inOut", duration: 1 });

    tl.fromTo('.background__image', { opacity: 0 }, { opacity: 1, ease: "none", duration: .1 });

    tl.fromTo('.header', { opacity: 0, visibility: "hidden" }, { opacity: 1, visibility: "visible", ease: "none", duration: 1 });
}))()
    
    