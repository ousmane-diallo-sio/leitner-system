import axios from 'axios';
import envUtils from '../utils/EnvUtils';

class SheetsService {

  axiosClient = axios.create({
    baseURL: envUtils.API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    validateStatus: () => true,
  })

  async getSheets() {
    return null
  }
}

const sheetsService = new SheetsService()
export default sheetsService
