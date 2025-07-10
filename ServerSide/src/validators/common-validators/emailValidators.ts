import { body, ValidationChain } from "express-validator";

export const emailValidators: ValidationChain = body("email")
  .notEmpty()
  .withMessage("Email is required")
  .isEmail()
  .withMessage("Invalid email address");
