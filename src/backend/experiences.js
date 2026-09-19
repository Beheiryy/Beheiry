export async function getExperiences(category){
    try{
        const response = await fetch('src/data/experiences.json');
        const data = await response.json();
        console.log(response);
        console.log("linebreak");
        console.log(data);
        console.log('linebreak again');
        console.log(data[0]);
        
        let choice;
        for(let i = 0; i < data.length; i++){
            if(data[i].company === category){
                choice = data[i];
                console.log('h3');
            }
        }
        
        return choice;
    }
    catch(error){
        console.error("Failed to fetch data: ", error)
    }
}
