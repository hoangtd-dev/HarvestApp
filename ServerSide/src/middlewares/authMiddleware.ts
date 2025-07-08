import { Request, Response, NextFunction, RequestHandler } from "express";

export const authMiddleware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const token = req.headers.authorization;
  // if (!token) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }
  next();
};
