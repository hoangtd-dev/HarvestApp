import { body, ValidationChain } from "express-validator";

export const passwordValidators: ValidationChain = body("password")
  .notEmpty()
  .withMessage("Password is required")
  .isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  .withMessage(
    "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol"
  );
