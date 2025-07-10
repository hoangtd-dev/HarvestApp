import jwt from "jsonwebtoken";
import { UserGenericInfoModel } from "../models/userModel";

export const generateToken = (user: UserGenericInfoModel) => {
  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN as string, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign({ user }, process.env.REFRESH_TOKEN as string, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};
