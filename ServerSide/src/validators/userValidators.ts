import { body } from "express-validator";
import { emailValidators } from "./common-validators/emailValidators";
import { passwordValidators } from "./common-validators/passwordValidators";

export const validateCreateUser = [
  body("name").notEmpty().withMessage("Name is required"),
  emailValidators,
  passwordValidators,
];
