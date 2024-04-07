((function init(){

    const toggleButton = document.getElementById("toogle-btn");
    const burgerMenu = document.getElementById("menu");
    const container = document.querySelector(".section__services");

    toggleButton.addEventListener("click", () => {
        setTimeout(() => {
            toggleButton.classList.toggle("open");
            burgerMenu.classList.toggle("active");
            container.classList.toggle("non-active")
        },250)
    })
    
    const tl = gsap.timeline();

    tl.fromTo('.preload', { opacity: 0}, { opacity: 1, duration: 2 })
    .to('.preload', { opacity: 0, ease: "power1.inOut", duration: 1 });

    tl.fromTo('.container', { opacity: 0 }, { opacity: 1, ease: "none", duration: .1 });

    tl.fromTo('.header', { opacity: 0, visibility: "hidden" }, { opacity: 1, visibility: "visible", ease: "none", duration: 1 });

}))()