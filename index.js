//import { createExperiences } from './src/backend/experiences.js';
import {getExperiences} from './src/backend/experiences.js';
import {createExperience} from '/src/backend/model/experiences.js'

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

const images = document.querySelectorAll('img');
console.log(images);

window.addEventListener('scroll', ()=>{
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercentage = totalHeight > 0 ? (scrollTop/totalHeight)*50:0;
    console.log(scrolledPercentage);
    document.querySelector('.scrollbar__progress').style.height=scrolledPercentage+'%';
})

window.addEventListener('load', async ()=>{
    //getExperienceData();
    console.log('hi world');
    const choice = await getExperiences('Texula');
    console.log("The choice has been made: ");
    console.log(choice);

    // console.log('testing creation of experiences')
    // const test = await createExperiences();
})

const knowledgeForm = document.querySelector('.knowledge__form');
console.log(knowledgeForm);
console.log('hiworld');

knowledgeForm.addEventListener('submit', async function(event){
    event.preventDefault();
    
    // const formData = new FormData(event.target);
    
    // const formProps = Object.fromEntries(formData);
    
    // const str = formProps.experience__search;

    // const searchResult = await getExperiences(str);

    // const responseParagraph = document.querySelector('.knowledge__answers__paragraph');

    // if(searchResult != undefined){
    //     const responseHTML = `
    //     <p>
    //     ${searchResult.company}, working as ${searchResult.title}, located in ${searchResult.location}, during the period ${searchResult.date}
    //     </p>
    //     `;
        
    //     responseParagraph.innerHTML = responseHTML;
    // }
    // else{
    //     responseParagraph.innerHTML ="";
    // }

    const data = {
        title: "Chief Dancer",
        company: "Dancing Co",
        employment_type: "Full-time",
        start_date: "October 7th",
        end_date: "October 9th",
        location: "Cairo",
        work_style: "Rough",
        description: "Dance very hard",
        tags: ['dance', 'love']
    }
    createExperience(data)    

})