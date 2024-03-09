import http from "@/utils/http";
import {API_ENDPOINTS} from '../utils/api-endpoints'

export const uploadExperienceAndMedia = async (input) => {

        const form = new FormData()
        const files = input.file
        form.append('position',input.position)
        form.append('company',input.company)
        form.append('startDate',input.startDate)
        form.append('endDate',input.endDate)
        form.append('file',input.file)

        if (files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                        form.append('file',files[i])
                }
        }

        return await http.post(API_ENDPOINTS.uploadExperienceAndMedia,form,{
                 headers: {
                          'Content-Type': 'multipart/form-data',
                        },
        })

}