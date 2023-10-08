import { Router } from "express";
import UserRepository from "./UserRepository";

const userController = Router();


userController.post('/login', (req, res) => {
  const { username, password } = req.body;
    const user = UserRepository.getOne(username, password)
    if (user) {
      return res.json(user);
    }
    res.status(401).json(null);
});

export default userController;