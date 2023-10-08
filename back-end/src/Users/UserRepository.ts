import UserModel from './UserModel';

export class UserRepository{
    getOne(username: string, password: string): UserModel | null {
        const database = require('../../database/database.json');
        const user = database.users.find(
            (user: UserModel) => user.username === username && user.password === password
          );
        return user;
    }
}

export default new UserRepository();