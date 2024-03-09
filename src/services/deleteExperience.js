import http from "@/utils/http";
import {API_ENDPOINTS} from '../utils/api-endpoints'

export const deleteExperiences = async (id) => {
        
        return await http.delete(API_ENDPOINTS.experience+`/${id}`)

}