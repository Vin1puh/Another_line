let first_block = document.getElementById('first-block');
let first_text = document.getElementById('first-text');
let first_button = document.getElementById('first-button');
let second_button = document.getElementById('second-button');
let second_block = document.getElementById('second-block');
let second_text = document.getElementById('second-text');
let third_button = document.getElementById('third-button');
let fourth_button = document.getElementById('fourth-button');
let typewriterTimeout;
let typewriterTimeout2;
let day = document.querySelectorAll('tr td')
let number = document.getElementById('number');
let email = document.getElementById('email');
let send_button = document.getElementById('send_button');

first_button.addEventListener('click', (e) => {
    if (first_button.classList.contains('empty_button')) {
        first_block.classList.toggle('first');
        first_button.classList.toggle('fill_button');
        first_button.classList.toggle('empty_button');
        second_button.classList.toggle('fill_button');
        second_button.classList.toggle('empty_button');
        first_text.classList.toggle('flex');

        function typeWriter(text, element, speed) {
            let i = 0;
            function type() {
                if (i < text.length) {
                    first_text.innerHTML = text.substring(0, i + 1);
                    i++;
                    typewriterTimeout = setTimeout(type, speed);
                }
            }
            type();
        }
        let text = "Biotechnology is a science that utilizes living organisms, cells and molecular processes to create innovative solutions in medicine, cosmetology, agriculture and ecology. In cosmetology, they enable the development of personalized care products based on skin DNA analysis, the synthesis of biodegradable peptides for anti-ageing effects, and the cultivation of artificial stem cells for tissue regeneration. For example, CRISPR and enzymatic catalysis technologies are already being used to create cosmetics that “teach” skin cells to repair themselves.";
        typeWriter(text, 'typewriter', 5);
    }
})
second_button.addEventListener('click', (e) => {
    if (second_button.classList.contains('empty_button')) {
        first_block.classList.toggle('first');
        first_button.classList.toggle('fill_button');
        first_button.classList.toggle('empty_button');
        second_button.classList.toggle('fill_button');
        second_button.classList.toggle('empty_button');
        first_text.classList.toggle('flex');
        clearTimeout(typewriterTimeout);
        first_text.innerHTML = "";
    }
})

third_button.addEventListener('click', (e) => {
    if (third_button.classList.contains('empty_button')) {
        second_block.classList.toggle('second');
        third_button.classList.toggle('fill_button');
        third_button.classList.toggle('empty_button');
        fourth_button.classList.toggle('fill_button');
        fourth_button.classList.toggle('empty_button');
        second_text.classList.toggle('flex');

        function typeWriter2(text, element, speed) {
            let i = 0;
            function type() {
                if (i < text.length) {
                    second_text.innerHTML = text.substring(0, i + 1);
                    i++;
                    typewriterTimeout2 = setTimeout(type, speed);
                }
            }
            type();
        }
        let text = "HIGH-TECH EQUIPMENT refers to advanced technological devices that incorporate cutting-edge innovations like AI, robotics, nanotechnology, and IoT for superior precision and efficiency. In medicine and cosmetology, such equipment enables non-invasive procedures (e.g., laser therapies, RF lifting) with AI-driven customization and real-time diagnostics. Examples include 3D-printed bioprinters for skin grafts, autonomous robotic surgical systems, and smart devices with AR interfaces for practitioner guidance. These solutions enhance safety, reduce human error, and push the boundaries of minimally invasive treatments, revolutionizing industries through automation and data-driven performance.";
        typeWriter2(text, 'typewriter', 5);
    }
})
fourth_button.addEventListener('click', (e) => {
    if (fourth_button.classList.contains('empty_button')) {
        second_block.classList.toggle('second');
        third_button.classList.toggle('fill_button');
        third_button.classList.toggle('empty_button');
        fourth_button.classList.toggle('fill_button');
        fourth_button.classList.toggle('empty_button');
        second_text.classList.toggle('flex');
        clearTimeout(typewriterTimeout2);
        second_text.innerHTML = "";
    }
})



day.forEach((e) => {
    e.addEventListener('click', () => {
        day.forEach(d =>{
            d.classList.remove('selected')
            d.classList.remove('blocked')
        });
        if(e.className === 'non_active') {
            e.classList.toggle('blocked');
        }else{
            e.classList.add('selected');
        }
    })
})



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
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.placeholder = 'Please enter a valid email address';
        email.value = '';
        email.classList.add('invalid');
        isValid = false;
    }
    else if (!/^[\d\s+\-()]{6,}$/.test(number.value)) {
        number.placeholder = 'Please enter a valid phone number';
        number.value = '';
        number.classList.add('invalid');
        isValid = false;
    }
    const selectedDay = document.querySelector('.selected');
    const blockedDay = document.querySelector('.blocked');
    if (blockedDay) {
        blockedDay.style.animation = 'shake 0.5s';
        setTimeout(() => blockedDay.style.animation = '', 500);
        alert('Error: You selected an unavailable date');
        isValid = false;
    }
    else if (!selectedDay) {
        alert('Please select a date before proceeding');
        isValid = false;
    }
    else {
        var selectedDate = selectedDay.textContent;
    }
    if(isValid){
        let pouppup = document.getElementById('form_pouppup');
        let close = document.getElementById('close')
        let for_date = document.getElementById('for-date')
        for_date.innerText = `Come to this address on the ${selectedDate}th to see beauty being born`
        pouppup.classList.add('flex');
        close.addEventListener('click', () => {
            pouppup.classList.remove('flex');
        })
    }
})