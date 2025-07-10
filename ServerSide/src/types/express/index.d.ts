import { UserGenericInfoModel } from "./models/userModel";
declare global {
  namespace Express {
    interface Request {
      user?: UserGenericInfoModel;
    }
  }
}

export {};
