let photo = document.querySelectorAll('.mini')
let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')
let fourth = document.getElementById('fourth')
let fiveth = document.getElementById('fiveth')
let big_photo = document.getElementById('main_picture')
let button = document.getElementById('forBuy')
let pouppup = document.getElementById('pouppup')
let close_b = document.getElementById('close')
let send_button = document.getElementById('send')
let number = document.getElementById('number')
let card = document.getElementById('card')

photo.forEach(a => {
    a.addEventListener('click', () => {
        photo.forEach(b => {
            b.classList.remove('across')
        })
        a.classList.add('across')
    })
})
first.addEventListener('click', () => {
    big_photo.classList.remove('second')
    big_photo.classList.remove('third')
    big_photo.classList.remove('fourth')
    big_photo.classList.remove('fiveth')
})
second.addEventListener('click', () => {
    big_photo.classList.add('second')
    big_photo.classList.remove('third')
    big_photo.classList.remove('fourth')
    big_photo.classList.remove('fiveth')
})
third.addEventListener('click', () => {
    big_photo.classList.remove('second')
    big_photo.classList.add('third')
    big_photo.classList.remove('fourth')
    big_photo.classList.remove('fiveth')
})
fourth.addEventListener('click', () => {
    big_photo.classList.remove('second')
    big_photo.classList.remove('third')
    big_photo.classList.add('fourth')
    big_photo.classList.remove('fiveth')
})
fiveth.addEventListener('click', () => {
    big_photo.classList.remove('second')
    big_photo.classList.remove('third')
    big_photo.classList.remove('fourth')
    big_photo.classList.add('fiveth')
})



button.addEventListener('click', () =>{
    pouppup.classList.add('flex')
})
close_b.addEventListener('click', () =>{
    pouppup.classList.remove('flex')
})



send_button.addEventListener('click', (e) => {
    number.classList.remove('invalid');
    card.classList.remove('invalid');
    let isValid = true;
    if (number.value.trim() === '') {
        number.placeholder = 'This is a required field';
        number.classList.add('invalid');
        isValid = false;
    }
    if (card.value.trim() === '') {
        card.placeholder = 'Please enter a valid email address';
        card.classList.add('invalid');
        isValid = false;
    }
    else if (card.value.length < 16 || card.value.length > 16) {
        card.placeholder = 'Please enter a valid email address';
        card.value = '';
        card.classList.add('invalid');
        isValid = false;
    }
    else if (!/^[\d\s+\-()]{6,}$/.test(number.value)) {
        number.placeholder = 'Please enter a valid phone number';
        number.value = '';
        number.classList.add('invalid');
        isValid = false;
    }
    if(isValid){
        window.location = href='/'
    }
})