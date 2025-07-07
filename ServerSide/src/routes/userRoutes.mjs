import { Router } from "express";
import { validateCreateUser } from "../validators/userValidators.mjs";
import UserController from "../controllers/userController.mjs";
import { validatorErrorResolverMiddleware } from "../middlewares/validatorErrorResolverMiddleware.mjs";

const router = Router();

router.post(
  "/users",
  validateCreateUser,
  validatorErrorResolverMiddleware,
  UserController.createUser
);
router.get("/users/:id", UserController.getUserById);
router.get("/users", UserController.getUsers);

export default router;
