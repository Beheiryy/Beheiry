export async function getNewId(){
    try{
        console.log('reached getNewid')
        const response = await fetch('src/data/experiences.json');
        const rawJsonText = await response.text();
        const parsedText = JSON.parse(rawJsonText);
        
        let arr_len = parsedText.length

        let lastId = 0

        if(arr_len > 0)
            lastId = parsedText[parsedText.length-1].id
        let newId = lastId + 1

        console.log(newId)
        console.log('new ID is: ', newId)
        return newId
        }
    catch(error){
        console.error("Failed to create experience")
    }
}