let mainImg = document.querySelector('.main-img img');
let optionsImg = document.querySelectorAll('.option');


function removeActive() {
    optionsImg.forEach(img => {
        img.classList.remove('active');
    });
}


optionsImg.forEach(option => {
    option.addEventListener('click', () => {
        removeActive();
        option.classList.add('active');
        let color = option.getAttribute('data-color');
        changeColor(color);
        let src = option.querySelector('img').getAttribute('src');
        mainImg.src = src;
    });
});

let root = document.querySelector(':root');
let text = document.querySelector('.text');

function changeColor(color) {
    let primayValue;
    if (color === 'green') {
        primayValue = 105;
        text.textContent = 'Watermelon';
    } else if (color === 'yellow') {
        primayValue = 50;
        text.textContent = 'Mango';
    } else if (color === 'orange') {
        primayValue = 31;
        text.textContent = 'Orange';
    } else if (color === 'pink') {
        primayValue = 329;
        text.textContent = 'Dragon Fruit';
    } else {
        primayValue = 0;
        text.textContent = 'Apple';
    }
    root.style.setProperty('--primary-color-hue', primayValue);
}

//!=========== Toggle Menu ============
let toggleMenu = document.querySelector('.toggle-menu');
let closeMenu = document.querySelector('.close-menu');
let navMenu = document.querySelector('.nav-menu');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.add('show');
});
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});