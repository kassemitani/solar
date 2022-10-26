import api from "./api"
import { SOLAR_SERVICE } from "./endpoints"
import type { ApiResponse } from "./types"

const getSoloarService = async(start: string, end: string): Promise<ApiResponse> => {
    try {
      const response: ApiResponse = (await api.get(SOLAR_SERVICE, 
        {
            params: {
                start,
                end
            }
        })).data
      return response
    } catch (error) {
      const response: ApiResponse = {
        success: false,
        data: undefined
      }
      return response
    }
  }
  
export default getSoloarService