import UserModel from './UserModel';

const fs = require('fs');

const database = require("../../database/database.json");

export class UserRepository{
    getOne(username: string, password: string): UserModel | null {
        const user = database.users.find(
            (user: UserModel) => user.username === username && user.password === password
          );
        return user;
    }

    createOne(username: string, password: string): UserModel | null {
        const userExists = database.users.some(
          (user: UserModel) => user.username === username
        );
        if (userExists) {
          return null;
        }
        const newUser: UserModel = { username, password };
        database.users.push(newUser);
       if (!newUser) return null
        if (newUser.username != null && newUser.password != null) {
          if (newUser.username.length >= 3 && newUser.password.length >= 6) {
            fs.writeFileSync("./database/database.json", JSON.stringify(database, null, 2));
            return newUser;
          }
        }
        return null
      }
}

export default new UserRepository();