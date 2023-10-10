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

  async getSheets(): Promise<SheetType[]> {
    try {
      const res = await this.axiosClient.get("/sheets")
      const resData = res.data as ServerResponse<SheetType[] |null>

      if (res.status === 200 && resData.data) {
        sheetMobx.setSheets(resData.data)
        return resData.data
      }

      if (resData.error) {
        toast.error(resData.error)
      }
      return []
    } catch (error) {
      toast.error("Erreur lors du chargement des questions")
      console.log("error: ", error)
      return []
    }
  }

  async getQuestionnaire(): Promise<SheetType[]> {
    try {
      const res = await this.axiosClient.post("/sheets/questionnaire")
      const resData = res.data as ServerResponse<SheetType[] |null>

      if (res.status === 201 && resData.data) {
        sheetMobx.setQuestionnaire(resData.data)
        return resData.data
      }

      if (resData.error) {
        toast.error(resData.error)
      }
      return []
    } catch (error) {
      toast.error("Erreur lors du chargement des questions")
      console.log("error: ", error)
      return []
    }
  }

  async answerQuestionnaire(id: number, answer: string) {
    try {
      const res = await this.axiosClient.put(`/sheets/${id}/updateCategory`, { userAnswer: answer })
      const resData = res.data as ServerResponse<null>

      if (res.status === 200) {
        toast.success("Réponse envoyée")
        this.getSheets()
      }

      if (resData.error) {
        toast.error(resData.error)
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi de la réponse")
      console.log("error: ", error)
    }
  }
}

const sheetsService = new SheetsService()
export default sheetsService
