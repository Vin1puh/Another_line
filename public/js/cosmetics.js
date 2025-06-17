let show_all = document.getElementById('showAll');
let hidden = document.getElementById('hidden');
let forewer = document.getElementById('forewer');

show_all.addEventListener('click', () => {
    hidden.classList.toggle('flex');
    setTimeout(() => {
        hidden.classList.toggle('visible');
    }, 10)
    if(show_all.textContent === 'Show all →'){
        show_all.textContent = 'Hide ↓';
    }else{
        show_all.textContent = 'Show all →';
    }
})

let lastScrollPosition = 0;
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > lastScrollPosition) {
        forewer.classList.add('vh');
        setTimeout(() => {
            forewer.classList.add('none');
        }, 230)
    } else if (currentScrollPosition < lastScrollPosition) {
    }

    lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
});