import http from "@/utils/http";
import {API_ENDPOINTS} from '../utils/api-endpoints'

export const getMyExperiences = async () => {
        
        return await http.get(API_ENDPOINTS.myExperiences)

}