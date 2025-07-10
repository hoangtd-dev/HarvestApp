import { Request, Response, NextFunction } from "express";
import AuthServices from "../services/authServices";

const login = async (req: Request, res: Response, next: NextFunction) => {
  console.log("login controller");
  try {
    const { email, password } = req.body;
    const { accessToken } = await AuthServices.login(email, password);

    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

export default { login };
