import axios from 'axios';
import envUtils from '../utils/EnvUtils';
import sheetMobx from './SheetsMobx';
import toast from 'react-hot-toast';

class SheetsService {

  axiosClient = axios.create({
    baseURL: envUtils.API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    validateStatus: () => true,
  })

  async getSheets() {
    try {
      const res = await this.axiosClient.post("/sheets")
      const resData = res.data as ServerResponse<SheetType[] |null>

      if (res.status === 200 && resData.data) {
        sheetMobx.setSheets(resData.data)
        return resData.data
      }

      if (resData.error) {
        toast.error(resData.error)
      }

      return null
    } catch (error) {
      toast.error("Erreur lors du chargement des questions")
      console.log("error: ", error)
      return null
    }
  }
}

const sheetsService = new SheetsService()
export default sheetsService
