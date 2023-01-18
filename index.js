// home top slider 
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    loop:true,
})