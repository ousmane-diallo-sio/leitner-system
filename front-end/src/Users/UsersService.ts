import axios from 'axios';
import toast from 'react-hot-toast';
import envUtils from '../utils/EnvUtils';
import userMobx from './UsersMobx';

class UsersService {

  axiosClient = axios.create({
    baseURL: envUtils.API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    validateStatus: () => true,
  })

  async login(username: string, password: string): Promise<UserType | null> {
    if (!username || !password) {
      toast.error("Nom d'utilisateur et mot de passe requis")
      return null
    }

    try {
      const res = await this.axiosClient.post("/user/login", { username, password })
      const resData = res.data as ServerResponse<UserType | null>

      if (res.status === 200) {
        userMobx.user = resData.data
        return resData.data
      }

      if (resData.error) {
        toast.error(resData.error)
      }

      return null
    } catch (error) {
      toast.error("Erreur lors de la connexion")
      console.log("error: ", error)
      return null
    }
  }

  logout() {
    userMobx.user = null
  }

  async signup(username: string, password: string): Promise<UserType | null> {
    if (!username || !password) {
      toast.error("Nom d'utilisateur et mot de passe requis")
      return null
    }

    try {
      const res = await this.axiosClient.post("/user/register", { username, password })
      const resData = res.data as ServerResponse<UserType | null>

      if (res.status === 201) {
        userMobx.user = resData.data
        return resData.data
      }

      if (resData.error) {
        toast.error(resData.error)
      }

      return null
    } catch (error) {
      toast.error("Erreur lors de l'inscription")
      console.log("error: ", error)
      return null
    }
  }
}

const usersService = new UsersService()
export default usersService
