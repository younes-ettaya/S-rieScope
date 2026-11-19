    export const Api = axios.create({
    baseURL: 'https://seriescope-api.vercel.app/api', 
    timeout: 8000,
        headers:{
            "X-Learner": "y.ettaya"
        }
        
    })
    // export default Api ;