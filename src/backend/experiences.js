import fs from '/fs/promsies';

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

export async function createExperiences(){
    try{
        const response = await fetch('src/data/experiences.json');
        const rawJsonText = await response.text();

        const parsedText = JSON.parse(rawJsonText);
        parsedText.push({
            "title":"ITIntern",
            "company":"HAP",
            "employment-type":"Internship",
            "date":"Jul 2025",
            "location":"Cairo",
            "work-style":"On-site",
            "description":"Connected cables"
        });
        const updatedArrayText = JSON.stringify(parsedText, null ,2);
        
        console.log(updatedArrayText)
        
        const jsonFilePath = 'src/data/experiences.json';

        try{
            await fs.writeFile(jsonFilePath, updatedArrayText, 'utf8');
            console.log('Successfully published to JSON file!');
        }
        catch(error){
            console.error('Failed to write JSON file: ', error)
        }

    }
    catch(error){
        console.error("Failed to create experience")
    }
}