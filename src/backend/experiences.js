export async function getExperiences(category){
    try{
        const response = await fetch('src/data/experiences.json');
        const data = await response.json();
        console.log(response);
        console.log("linebreak");
        console.log(data);
        
        return data;
    }
    catch(error){
        console.error("Failed to fetch data: ", error)
    }
}