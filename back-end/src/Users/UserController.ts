import { Router } from "express";
import UserRepository from "./UserRepository";

const userController = Router();


userController.post('/login', (req, res) => {
  const { username, password } = req.body;
    const user = UserRepository.getOne(username, password)
    if (user) {
      return res.status(200).json({data: {...user}});
    }
    return res.status(401).json({data: null, error: "Identifiants incorrectes"});
});

userController.post('/register', (req, res) => {
  const { username, password } = req.body;
    const user = UserRepository.createOne(username, password)
    if (!user) {
      return res.status(401).json({data: null, error: "Impossible de s'inscrire avec ces identifiants"});
    }
    return res.status(201).json({data: {...user}});
});

export default userController;