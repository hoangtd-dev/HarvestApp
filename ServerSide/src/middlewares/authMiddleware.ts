import { Request, Response, NextFunction, RequestHandler } from "express";

export const authMiddleware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
