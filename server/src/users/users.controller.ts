import express, { Request, Response } from "express";

import User from "./user.interface";

class UsersController {
  public path = "/users";
  public router = express.Router();

  private user: User[] = [
    {
      name: "Pradnyesh",
      email: "pradnyeshaglawe12@gmail.com",
      password: "chupa ke rakha hai",
    },
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getUserInfo);
    this.router.post(this.path, this.createUser);
  }

  getUserInfo = (req: Request, res: Response) => {
    res.send(this.user);
  };

  createUser = (req: Request, res: Response) => {
    const user: User = req.body;
    res.send(user);
  };
}

export default UsersController;
