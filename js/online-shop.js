((function init(){

    const toggleButton = document.getElementById("toogle-btn");
    const burgerMenu = document.getElementById("menu");
    const container = document.querySelector(".section__shop");

    toggleButton.addEventListener("click", () => {
        setTimeout(() => {
            toggleButton.classList.toggle("open");
            burgerMenu.classList.toggle("active");
            container.classList.toggle("non-active")
        },250)
    })

     const toggleImg = document.querySelectorAll(".section__shop-body__card-img");
    const toggleDesc = document.querySelectorAll(".section__shop-body__card-description");



    toggleImg.forEach((img, index) => {
    img.addEventListener("click", () => {
        // Entferne die "active"-Klasse von allen Beschreibungen und Bildern
        /* toggleDesc.forEach((desc) => desc.classList.remove("active"));
        toggleImg.forEach((img) => img.classList.remove("active")); */
        
        // Füge die "active"-Klasse zum geklickten Bild und zur entsprechenden Beschreibung hinzu
        if (img.classList.contains("active")) {
            // If the image is already active, remove the class
            img.classList.remove("active");
            toggleDesc[index].classList.remove("active");
          } else {
            // If the image is not active, add the class
            img.classList.add("active");
            toggleDesc[index].classList.add("active");
          }

           /* toggleDesc.forEach((desc) => desc.classList.remove("active"));
        toggleImg.forEach((img) => img.classList.remove("active"));  */
        
    });
});

 toggleDesc.forEach((desc, index) => {
    desc.addEventListener("click", () => {
        // Entferne die "active"-Klasse von allen Beschreibungen und Bildern
        toggleDesc.forEach((desc) => desc.classList.remove("active"));
        toggleImg.forEach((img) => img.classList.remove("active"));
        
        // Füge die "active"-Klasse zur geklickten Beschreibung und zum entsprechenden Bild hinzu
        if(desc,classList.contains("active")){
            desc.classList.remove("active");
            toggleImg[index].classList.remove("active");
        }
        else{
            desc.classList.add("active");
            toggleImg[index].classList.add("active");
        }
        
    });
    }); 
 
    
    
    const tl = gsap.timeline();

    tl.fromTo('.preload', { opacity: 0}, { opacity: 1, duration: 2 })
    .to('.preload', { opacity: 0, ease: "power1.inOut", duration: 1 });

    tl.fromTo('.container', { opacity: 0 }, { opacity: 1, ease: "none", duration: .1 });

    tl.fromTo('.header', { opacity: 0, visibility: "hidden" }, { opacity: 1, visibility: "visible", ease: "none", duration: 1 });

    //navigation

    let all = document.querySelector('.section__shop-btn-all');
    let sweets = document.querySelector('.section__shop-btn-sweets');
    let quiches = document.querySelector('.section__shop-btn-quiches');
    let cakes = document.querySelector('.section__shop-btn-cakes');

    const sweetsList = document.querySelector('.section__shop-body__sweets');
    const nonSweetsList = document.querySelector('.section__shop-body__non-sweets');
    const cakesList = document.querySelector('.section__shop-body__cakes');


    function toggleList(list) {
        if (list.classList.contains('active')) {
            gsap.from(list,{y:20,opacity:0,duration: .8, ease: 'none'});
            gsap.to(list, { y: 0,opacity:1, duration: .8, ease: 'none' }); 
        }
    }
    all.onclick = () =>{
        all.classList.add('active');
        sweets.classList.remove('active');
        quiches.classList.remove('active');
        cakes.classList.remove('active');

        sweetsList.classList.add('active');
        nonSweetsList.classList.add('active');
        cakesList.classList.add('active');

        toggleList(sweetsList);
        toggleList(nonSweetsList);
        toggleList(cakesList);
        
    }

    sweets.onclick = () =>{
        all.classList.remove('active');
        sweets.classList.add('active');
        quiches.classList.remove('active');
        cakes.classList.remove('active');

        sweetsList.classList.add('active');
        nonSweetsList.classList.remove('active');
        cakesList.classList.remove('active');
        
        toggleList(sweetsList);
        toggleList(nonSweetsList);
        toggleList(cakesList);
        
    }
    quiches.onclick = () =>{
        all.classList.remove('active');
        sweets.classList.remove('active');
        quiches.classList.add('active');
        cakes.classList.remove('active');
        sweetsList.classList.remove('active');
        nonSweetsList.classList.add('active');
        cakesList.classList.remove('active');

        toggleList(sweetsList);
        toggleList(nonSweetsList);
        toggleList(cakesList);
        
    }
    cakes.onclick = () =>{
        all.classList.remove('active');
        sweets.classList.remove('active');
        quiches.classList.remove('active');
        cakes.classList.add('active');
        sweetsList.classList.remove('active');
        nonSweetsList.classList.remove('active');
        cakesList.classList.add('active');

        toggleList(sweetsList);
        toggleList(nonSweetsList);
        toggleList(cakesList);
    }

    
  
    

}))()