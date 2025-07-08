import { Request, Response, NextFunction } from "express";

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status((err as any).status || 500)
    .json({ message: err.message || "Server Error" });
};
