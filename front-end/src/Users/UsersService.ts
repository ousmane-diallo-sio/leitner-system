import axios from 'axios';
import toast from 'react-hot-toast';
import envUtils from '../utils/EnvUtils';

class UsersService {

  axiosClient = axios.create({
    baseURL: envUtils.API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  async login(username: string, password: string): Promise<User | null> {
    if (!username || !password) {
      toast.error("Nom d'utilisateur et mot de passe requis")
      return null
    }

    try {
      const res = await this.axiosClient.post("/user/login", { username, password })
      if (res.status === 200) {
        toast.success(`Bienvenue ${username}`)
        return res.data
      }
      return null
    } catch (error) {
      toast.error("Erreur lors de la connexion")
      console.log("error: ", error)
      return null
    }
  }
}

const usersService = new UsersService()
export default usersService
