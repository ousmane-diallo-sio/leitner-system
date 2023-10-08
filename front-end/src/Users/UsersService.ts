import axios from 'axios';

class UsersService {
  
  login(username: string, password: string): User | null {
    if (username && password) {
      return { username, password }
    }
    return null
  }

}

const usersService = new UsersService()
export default usersService
