import { Router } from "express";
import UserRepository from "./UserRepository";

const userController = Router();


userController.post('/login', (req, res) => {
  const { username, password } = req.body;
    const user = UserRepository.getOne(username, password)
    if (user) {
      res.json({ auth: true });
    } else {
      res.status(401).json({ auth: false, message: 'Wrong credentials' });
    }
});

export default userController;