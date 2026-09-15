const hamMenu = document.querySelector('.navbar__ham-menu');
console.log(typeof(hamMenu));
console.log(hamMenu);

const offScreenMenu = document.querySelector('.navbar__off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

const experiences = document.querySelectorAll('.experience');
console.log(experiences);
console.log(typeof(experiences));

// experiences.forEach(ex =>{
//     ex.addEventListener('click', ()=>{
//         //ex.style.maxWidth = "50vw";
//         ex.style.maxHeight = "50vh";
//         //ex.style.width = "50vw";
//         ex.style.height = "50vh";
//         ex.style.transition = ".3s ease";
//         ex.style.backgroundColor = 'var(--primary-offwhite-transparent)';
//         ex.style.position= "absolute";
//         //ex.style.left = "0";
//         ex.style.zIndex = "10";
//         ex.style.backdropFilter="blur(5px)";
//     })
//     // ex.addEventListener('click', (e) =>{
//     //     e.style.backgroundColor = 'red';
//     // })
//     // ex.style.backgroundColor = 'red';
// })

const images = document.querySelectorAll('img');
console.log(images);

// images.forEach((img)=>{
//     img.clickCount = 0;

//     img.addEventListener('click', ()=>{
//         if(img.clickCount === 0){
//             img.clickCount = 1;
//             img.style.maxWidth = '100vw';
//             img.style.maxHeight = '100%';
//             img.style.justifySelf= 'center';

//             img.style.backdropFilter = 'blur(5px)';
//             img.style.position = 'absolute';
//             img.style.center = '50vw';
//         }
//         else{
//             img.clickCount = 0;
//             img.style.backdropFilter = 'blur(0)';
//             img.style.center='50vw';
//         }
//     })
// })

window.addEventListener('scroll', ()=>{
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercentage = totalHeight > 0 ? (scrollTop/totalHeight)*50:0;
    console.log(scrolledPercentage);
    document.querySelector('.scrollbar__progress').style.height=scrolledPercentage+'%';
})