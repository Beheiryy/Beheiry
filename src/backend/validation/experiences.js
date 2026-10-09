
function validateExperience(data){
    if(typeof data.title !== 'string'){
        throw new Error("Invalid title");
    }
    
    if(typeof data.company !== 'string'){
        throw new Error("Invalid company");
    }

    if(typeof data.employment_type !== 'string'){
        throw new Error("Invalid employment type");
    }

    if(typeof data.company !== 'string'){
        throw new Error("Invalid company");
    }
}