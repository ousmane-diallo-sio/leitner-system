import axios from 'axios';
import toast from 'react-hot-toast';

class UsersService {

  axiosClient = axios.create({
    baseURL: process.env.API_PUBLIC_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  async login(username: string, password: string): Promise<User | null> {
    if (!username || !password) {
      toast.error("Nom d'utilisateur et mot de passe requis")
      return null
    }

    const route = `${process.env.API_PUBLIC_URL}/user/login`
    try {
      const res = await this.axiosClient.post(route, { username, password })
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
