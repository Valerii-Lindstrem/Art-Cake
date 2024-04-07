((function init(){

    const toggleButton = document.getElementById("toogle-btn");
    const burgerMenu = document.getElementById("menu");
    const backgroundImage = document.querySelector(".background__image");

    toggleButton.addEventListener("click", () => {
        setTimeout(() => {
            toggleButton.classList.toggle("open");
            burgerMenu.classList.toggle("active");
            backgroundImage.classList.toggle("non-active")
        },250)
    })
    

}))()