import UserModel from './UserModel';

const database = require('../../database/database.json');

export class UserRepository{
    getOne(username: string, password: string): UserModel | null {
        const user = database.users.find(
            (user: UserModel) => user.username === username && user.password === password
          );
        return user;
    }
}

export default new UserRepository();