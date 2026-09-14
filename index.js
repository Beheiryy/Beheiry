const hamMenu = document.querySelector('.navbar__ham-menu');
console.log(typeof(hamMenu));
console.log(hamMenu);

const offScreenMenu = document.querySelector('.navbar__off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})