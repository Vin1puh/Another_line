let number = document.getElementById('number');
let email = document.getElementById('email');
let send_button = document.getElementById('send_button');

send_button.addEventListener('click', (e) => {
    number.classList.remove('invalid');
    email.classList.remove('invalid');
    let isValid = true;
    if (number.value.trim() === '') {
        number.placeholder = 'This is a required field';
        number.classList.add('invalid');
        isValid = false;
    }
    if (email.value.trim() === '') {
        email.placeholder = 'Please enter a valid email address';
        email.classList.add('invalid');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.placeholder = 'Please enter a valid email address';
        email.value = '';
        email.classList.add('invalid');
        isValid = false;
    } else if (!/^[\d\s+\-()]{6,}$/.test(number.value)) {
        number.placeholder = 'Please enter a valid phone number';
        number.value = '';
        number.classList.add('invalid');
        isValid = false;
    }
    if(isValid){
        location = href='https://gmail.com'
    }
})