let text_1 = document.getElementById("text_1");
let text_2 = document.getElementById("text_2");
let text_3 = document.getElementById("text_3");

function typeWriter(text, element, speed) {
    let i = 0;
    let b = 0;
    let c = 0;
    function type() {
        if (i < text.length) {
            text_1.innerHTML = text_for_1.substring(0, i + 1);
            i++;
            setTimeout(() => {
                text_2.innerHTML = text_for_2.substring(0, b + 1);
                b++;
            }, 1000)
            setTimeout(() =>{
                text_3.innerHTML = text_for_3.substring(0, c + 1);
                c++;
            }, 2000)
            typewriterTimeout = setTimeout(type, speed);
        }
    }
    type();
}
let text_for_1 = "SVR helps even out skin tone, brighten skin and correct age spots, and strengthens the skin's defenses against the negative external factors that cause skin tone and dullness.";
let text_for_2 = "The concentrate with a light, moisturizing texture is quickly absorbed, leaving the skin silky and radiant. The product can be applied not only to the face and neck, but also to the skin in the décolletage area and the skin of the hands."
let text_for_3 = "Optimal for skin with dull and uneven skin tone and with age spots."
typeWriter(text_for_1, 'typewriter', 5);