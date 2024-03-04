import http from "@/utils/http";
import {API_ENDPOINTS} from '../utils/api-endpoints'

export const login = async (input) => {
        return await http.post(API_ENDPOINTS.login,input)

}