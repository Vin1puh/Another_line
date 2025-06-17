new Swiper('.cosmetic', {
    direction: 'horizontal',
    loop: true,
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
            slidesPerView: 1
        },
        375:{
            slidesPerView: 1
        },
        320:{
            slidesPerView: 1
        }
    }
});
new Swiper('.photos', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 60,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
    },
    breakpoints:{
        1440:{
            slidesPerView: 3
        },
        1024:{
            slidesPerView: 2
        },
        768:{
            slidesPerView: 2
        },
        425:{
            slidesPerView: 1
        },
        375:{
            slidesPerView: 1
        },
        320:{
            slidesPerView: 1
        }
    }
});
new Swiper('.develop', {
    direction: 'vertical',
    loop: true,
    grabCursor: false,
    mousewheel: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
    }
});
new Swiper('.slider', {
    direction: 'vertical',
    grabCursor: false,
    mousewheel: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 0,
});
new Swiper('.pictures', {
    direction: 'vertical',
    loop: true,
    grabCursor: false,
    mousewheel: true,
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 50,
});
new Swiper('.develops', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 100,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
    },
    breakpoints:{
        1440:{
            slidesPerView: 3
        },
        1024:{
            slidesPerView: 2
        },
        768:{
            slidesPerView: 2
        },
        425:{
            slidesPerView: 2
        },
        375:{
            slidesPerView: 1
        },
        320:{
            slidesPerView: 1
        }
    }
});