export async function getExperiences(category){
    try{
        const response = await fetch('src/data/experiences.json');
        const data = await response.json();
        
        let choice;
        for(let i = 0; i < data.length; i++){
            if(data[i].company === category){
                choice = data[i];
            }
        }
        
        return choice;
    }
    catch(error){
        console.error("Failed to fetch data: ", error)
    }
}
