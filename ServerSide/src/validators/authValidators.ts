import { passwordValidators } from "./common-validators/passwordValidators";
import { emailValidators } from "./common-validators/emailValidators";

export const validateLoginCredentials = [emailValidators, passwordValidators];
