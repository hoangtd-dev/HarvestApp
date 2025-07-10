import UserServices from "../services/userServices";
import { Request, Response, NextFunction } from "express";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.createUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.getUserById(Number(req.params.id));
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.getUsers();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export default {
  createUser,
  getUserById,
  getUsers,
};
