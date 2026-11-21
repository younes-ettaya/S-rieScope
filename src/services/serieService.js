import { Api } from "./api.js";


export async function getAll(filter = {}){
    try {
        const response = await Api.get("/series",filter)
        
        return response.data;
        
    } catch (error) {
        console.error(error); 
    }
} 
export async function getById(id){
    try {
        const response = await Api.get(`/series${id}`)
        
        return response.data;
        
    } catch (error) {
        console.error(error); 
    }
} 

export async function create(serie){
    try {
        const response = await Api.post("/series",serie)
        return response.data
        
    } catch (error) {
        console.error(error); 
        
    }
}
export async function update(id ,serie){
    try {
        const response = await Api.patch(`/series${id}`,serie)
        return response.data
        
    } catch (error) {
        console.error(error); 
        
    }
}
export async function remove(id){
    try {
        const response = await Api.delete(`/series/${id}`)
        console.log(response.status);

        return response.data
        
    } catch (error) {
        console.error(error); 
        
    }
}

