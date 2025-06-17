new Swiper('.main_news', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
    },
    breakpoints:{
        1440:{
            slidesPerView: 4
        },
        1024:{
            slidesPerView: 3
        },
        768:{
            slidesPerView: 2
        },
        425:{
            slidesPerView: 2
        }
    }
});