import { getNewId } from '../repository/experiences.js'

export async function createExperience(data){
    console.log('reached final dest')
    return{
        id: getNewId(),
        title: data.title,
        company: data.company,
        employment_type: data.employment_type,
        start_date: data.start_date,
        end_date: data.end_date ?? null,
        location: data.location,
        work_style: data.work_style,
        description: data.description ?? "",
        tags: data.tags ?? []
    }
}